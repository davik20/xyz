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
  const [pairs, setPairs] = useState<any>(null);
  const [isMultiPair, setIsMultiPair] = useState<any>(false);
  const [pair, setPair] = useState<any>([]);
  const tokens = useMemo<any>(() => getTokens(chainId), [chainId]);
  const [token0Contract, setToken0Contract] = useState<any>(null);
  const [token1Contract, setToken1Contract] = useState<any>(null);
  const [token0Balance, setToken0Balance] = useState<any>(null);
  const [token1Balance, setToken1Balance] = useState<any>(null);
  const sdkProvider = useMemo(() => SDKPROVIDER(chainId), [chainId]);

  const RouterSdks: any = useMemo(() => getSDK(chainId, "uniswap"), [chainId]);

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
    // console.log(Object.keys(RouterSdks));
    if (tokens.length > 0 && chainId && RouterSdks) {
      try {
        Promise.all([
          fetchTokenData(
            RouterSdks[Object.keys(RouterSdks)[0]].Fetcher,
            chainId,
            tokens[0].address,
            provider,
            tokens[0].symbol,
            tokens[0].name
          ),
          fetchTokenData(
            RouterSdks[Object.keys(RouterSdks)[0]].Fetcher,
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
  }, [tokens, chainId, RouterSdks]);

  useEffect(() => {
    // get pair

    if (token0Sdk && token1Sdk) {
      getPairs(token0Sdk, token1Sdk)
        .then((pairs: any) => {
          console.log("a pair ", pairs);
          setPairs(pairs);
          // if (pairs) {
          //   console.log("These are the pairs", pairs);
          //   setPairs(pairs);
          // }
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
  const getPairs: any = async (token0Sdk: any, tokenSdk: any) => {
    console.log("chain id", chainId);
    if (token0Sdk && token1Sdk && RouterSdks) {
      console.log("going in");
      try {
        const functions = [];
        const routerNames: any = [];
        for (let i in RouterSdks) {
          functions.push(
            RouterSdks[i].Fetcher.fetchPairData(token0Sdk, token1Sdk, provider)
          );
          routerNames.push(i);
        }

        let pairsReturned: any = await Promise.allSettled(functions);
        console.log(pairsReturned);
        pairsReturned = pairsReturned.filter((item: any) => {
          if (item.status === "fulfilled") {
            return item.value;
          }
        });

        if (pairsReturned.length === 0) {
          throw "No path found, taking alternate route";
        }

        const pairs = pairsReturned.map((pair: any, index: any) => {
          return {
            dex: routerNames[index],
            pair: pair.value,
          };
        });

        console.log(pairs);
        setIsMultiPair(false);

        return pairs;
      } catch (error) {
        console.log(error);
        try {
          console.log(error);

          const functions = [];
          const routerNames: any = [];

          for (let i in RouterSdks) {
            functions.push(
              Promise.all([
                RouterSdks[i].Fetcher.fetchPairData(
                  token0Sdk,

                  getWETH(RouterSdks[i].WETH, chainId),
                  provider
                ),
                RouterSdks[i].Fetcher.fetchPairData(
                  token1Sdk,
                  getWETH(RouterSdks[i].WETH, chainId),
                  provider
                ),
              ])
            );

            routerNames.push(i);
            console.log(functions);
          }
          let pairsReturned: any = await Promise.allSettled(functions);

          pairsReturned = pairsReturned.filter((item: any) => {
            if (item.status === "fulfilled") {
              return item.value;
            }
          });

          if (pairsReturned.length === 0) {
            throw "Insufficient Liquidity error";
          }
          console.log("paris ", pairsReturned);
          const pairs = pairsReturned.map((pair: any, index: any) => {
            return {
              dex: routerNames[index],
              pair: pair.value,
            };
          });

          console.log(pairs);

          setIsMultiPair(true);

          return pairs;
        } catch (error) {
          // setInsufficientLiquidty(true);
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
          RouterSdks,
          token0Sdk,
          token1Sdk,
          token0Contract,
          token1Contract,
          isMultiPair,
          pairs,
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
    RouterSdks,
    token0Sdk,
    token1Sdk,
    children,
    token0Contract,
    token1Contract,
    isMultiPair,
    pairs,
  ]);
};

export default SwapProvider;
