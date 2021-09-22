import React, { useMemo, useState, useEffect } from "react";
import { getTokens, ROUTER_ADDRESS } from "../utils/constants";
import {
  getSDK,
  getWETH,
  UniswapSdkInterface,
  sdkProvider as SDKPROVIDER,
} from "../utils/router";
import { fetchTokenData } from "../utils/swap";
import useConnection from "./UseConnection";
import { SwapContext } from "./UseSwap";
import Erc20Abi from "../contracts/Erc20Abi.json";
import RouterAbi from "../contracts/RouterAbi.json";
import { ethers } from "ethers";

interface Props {
  children: JSX.Element;
}

const SwapProvider: React.FC<Props> = ({ children }) => {
  console.log("swap provider");
  const { chainId, account, web3 }: any = useConnection();
  const [token0Metadata, setToken0Metadata] = useState<any>(null);
  const [token1Metadata, setToken1Metadata] = useState<any>(null);
  const [token0Sdk, setToken0Sdk] = useState<any>(null);
  const [token1Sdk, setToken1Sdk] = useState<any>(null);
  const [pair, setPair] = useState<any>([]);
  const tokens = useMemo<any>(() => getTokens(chainId), [chainId]);
  const [token0Contract, setToken0Contract] = useState<any>(null);
  const [token1Contract, setToken1Contract] = useState<any>(null);
  const [token0Balance, setToken0Balance] = useState<any>(null);
  const [token1Balance, setToken1Balance] = useState<any>(null);
  const sdkProvider = useMemo(() => SDKPROVIDER(chainId), [chainId]);

  const SDK: any = useMemo(() => getSDK(chainId, "uniswap"), [chainId]);
  let provider = new ethers.providers.Web3Provider(web3.currentProvider);
  useEffect(() => {
    if (tokens.length > 0) {
      setToken0Metadata(tokens[0]);
      setToken1Metadata(tokens[1]);
    }
    return () => {};
  }, [tokens]);

  useEffect(() => {
    // Grab Tokens from the sdk

    if (tokens.length > 0 && chainId && SDK) {
      try {
        Promise.all([
          fetchTokenData(
            SDK.Fetcher,
            chainId,
            tokens[0].address,
            provider,
            tokens[0].symbol,
            tokens[0].name
          ),
          fetchTokenData(
            SDK.Fetcher,
            chainId,
            tokens[1].address,
            provider,
            tokens[1].symbol,
            tokens[1].name
          ),
        ]).then((result) => {
          setToken0Sdk(result[0]);
          setToken1Sdk(result[1]);

          console.log(result);
        });
      } catch (error) {
        console.log("Error at grabbing token sdk ", error);
      }
    }
  }, [tokens, chainId, SDK]);

  useEffect(() => {
    // get pair

    if (token0Sdk && token1Sdk) {
      getPair(token0Sdk, token1Sdk)
        .then((pair: any) => {
          console.log(pair);
          if (pair && pair.length) {
            setPair([...pair]);
          }
        })
        .catch((err: any) => {
          console.log(err);
        });
    }

    return () => {};
  }, [token0Sdk, token1Sdk]);

  useEffect(() => {
    if (token0Metadata) {
      const contract = getTokenContract(token0Metadata);
      if (contract && account) {
        const balance = getBalance(contract, account)
          .then((balance: any) => {
            console.log("balance 0 ", balance);
            setToken1Balance(balance);
          })
          .catch((err: any) => {
            console.log("contact fetching error ", err);
          });
      }
      setToken0Contract(contract);
    }
  }, [token0Metadata, account]);

  useEffect(() => {
    if (token1Metadata) {
      const contract = getTokenContract(token1Metadata);
      if (contract && account) {
        getBalance(contract, account)
          .then((balance: any) => {
            console.log("balance 0 ", balance);
            setToken1Balance(balance);
          })
          .catch((err: any) => {
            console.log("contact fetching error ", err);
          });
      }
      console.log(contract);
      setToken1Contract(contract);
    }
  }, [token1Metadata]);

  // for getting pair
  const getPair: any = async (token0Sdk: any, tokenSdk: any) => {
    console.log("chain id", chainId);
    if (token0Sdk && token1Sdk && SDK) {
      try {
        const pair = await SDK.Fetcher.fetchPairData(
          token0Sdk,
          token1Sdk,
          provider
        );
        return [pair];
      } catch (error) {
        try {
          console.log("alternate route", token0Sdk, token1Sdk);

          console.log("chain id er", SDK.WETH["1"]);
          const pair = await Promise.all([
            SDK.Fetcher.fetchPairData(
              token0Sdk,

              getWETH(SDK.WETH, chainId),
              provider
            ),
            SDK.Fetcher.fetchPairData(
              token1Sdk,
              getWETH(SDK.WETH, chainId),
              provider
            ),
          ]);

          return pair;

          // return [token0WethPair, token1WethPair]
          // setPair((prev: any) => (prev = [token0WethPair, token1WethPair]));
        } catch (error) {
          // setInsufficientLiquidty(true);
          console.log("Pair Getting Error, NO liquidity");
          console.log(error);
        }
      }
    }
  };

  // for getting tokenContract
  const getTokenContract: any = (tokenMetaData: any) => {
    if (tokenMetaData) {
      try {
        const contract = new web3.eth.Contract(Erc20Abi, tokenMetaData.address);
        return contract;
      } catch (error) {
        console.log("contract creation error ", error);
      }
    } else {
      return "nothing found";
    }
  };

  // for getting use balance
  const getBalance: any = async (contract: any, account: any) => {
    if (contract && account) {
      return contract.methods
        .balanceOf(account)
        .call({ from: account })
        .then((balance: any) => {
          console.log(balance);
          return balance;
        });
    }
  };

  return useMemo(() => {
    return (
      <SwapContext.Provider
        value={{
          tokens,
          token0Metadata,
          token1Metadata,
          pair,
          SDK,
          token0Sdk,
          token1Sdk,
          token0Contract,
          token1Contract,
        }}
      >
        {children}
      </SwapContext.Provider>
    );
  }, [
    tokens,
    token0Metadata,
    token1Metadata,
    pair,
    SDK,
    token0Sdk,
    token1Sdk,
    children,
    token0Contract,
    token1Contract,
  ]);
};

export default SwapProvider;
