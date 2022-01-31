import React, { useMemo, useState, useEffect, Fragment } from "react";
import { getTokens, ROUTER_ADDRESS } from "../utils/constants";
import {
  getSDK,
  getWETH,
  UniswapSdkInterface,
  sdkProvider as SDKPROVIDER,
} from "../utils/router";
import { fetchTokenData, getTokenContract, getBalance } from "../utils/swap";
import useConnection from "./UseConnection";
import { SwapContext } from "./UseSwap";

import RouterAbi from "../contracts/RouterAbi.json";
import { ethers } from "ethers";
import useLocalStorage from "../hooks/useLocalStorage";

interface Props {
  children: JSX.Element;
}

const SwapProvider: React.FC<Props> = ({ children }) => {
  console.log("swap provider");
  const { chainId, account, web3 }: any = useConnection();
  const [tokenSideSelected, setTokenSideSelected] = useState(0);
  const [token0Metadata, setToken0Metadata] = useState<any>(null);
  const [token1Metadata, setToken1Metadata] = useState<any>(null);
  const [token0Sdk, setToken0Sdk] = useState<any>(null);
  const [token1Sdk, setToken1Sdk] = useState<any>(null);
  const [token0Sdks, setToken0Sdks] = useState<any>(null);
  const [token1Sdks, setToken1Sdks] = useState<any>(null);
  const [pairs, setPairs] = useState<any>(null);
  const [isMultiPair, setIsMultiPair] = useState<any>(false);
  const [pair, setPair] = useState<any>([]);
  const [updater, setUpdater] = useState(0);
  // const tokens = useMemo(() => {
  //   return getTokens(chainId);
  // }, [chainId]);

  const [tokens, setTokens] = useState(() => {
    return getTokens(chainId);
  });

  const [tradeTokens, setTradeTokens] = useState(tokens.slice(0, 2));

  const [token0Contract, setToken0Contract] = useState<any>(null);
  const [token1Contract, setToken1Contract] = useState<any>(null);
  const [token0Balance, setToken0Balance] = useState<any>(null);
  const [token1Balance, setToken1Balance] = useState<any>(null);
  const sdkProvider = useMemo(() => SDKPROVIDER(chainId), [chainId]);

  const RouterSdks: any = useMemo(() => getSDK(chainId, "uniswap"), [chainId]);
  console.log(RouterSdks);
  let provider = new ethers.providers.Web3Provider(web3.currentProvider);

  useEffect(() => {
    if (tradeTokens.length > 0) {
      setToken0Metadata(tradeTokens[0]);
      setToken1Metadata(tradeTokens[1]);
    }
    return () => {};
  }, [tradeTokens]);

  useEffect(() => {
    // Grab Tokens from the sdk
    // console.log(Object.keys(RouterSdks));

    if (tradeTokens.length > 0 && chainId && RouterSdks) {
      try {
        const functions = [];
        let i: any;
        for (i of Object.keys(RouterSdks)) {
          console.log(RouterSdks[i]);

          functions.push([
            fetchTokenData(
              RouterSdks[i].Fetcher,
              chainId,
              tradeTokens[0].address,
              provider,
              tradeTokens[0].symbol,
              tradeTokens[0].name
            ),

            fetchTokenData(
              RouterSdks[i].Fetcher,
              chainId,
              tradeTokens[1].address,
              provider,
              tradeTokens[1].symbol,
              tradeTokens[1].name
            ),
          ]);
        }

        console.log(functions);
        let index = 0;

        // RouterSdks[Object.keys(RouterSdks[counter])]
        functions.forEach((items: any) => {
          Promise.allSettled(items)

            .then((result: any) => {
              console.log(index, Object.keys(RouterSdks)[index]);

              console.log("Inside promise ", index);
              const [token0, token1] = result;
              if (token0.status === "fulfilled") {
                setToken0Sdks((prev: any) => {
                  return {
                    ...prev,
                    [Object.keys(RouterSdks)[index]]: token0.value,
                  };
                });
              }

              if (token1.status === "fulfilled") {
                setToken1Sdks((prev: any) => {
                  return {
                    ...prev,
                    [Object.keys(RouterSdks)[index]]: token1.value,
                  };
                });
              }

              index += 1;
            })

            .catch((err) => {
              console.log(err);
              index += 1;
            });
        });
      } catch (error) {
        console.log("Error at grabbing token sdk ", error);
      }
    }
  }, [updater, tradeTokens, chainId, RouterSdks]);

  useEffect(() => {
    // get pair

    if (token0Sdks && token1Sdks) {
      getPairs(token0Sdks, token1Sdks)
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
  }, [token0Sdks, token1Sdks]);

  useEffect(() => {
    if (token0Metadata) {
      console.log("Rerendering");
      const contract = getTokenContract(token0Metadata, web3);
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
  }, [token0Metadata, account, web3]);

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
  }, [token1Metadata, account]);

  // for getting pair
  const getPairs: any = async (token0Sdks: any, token1Sdks: any) => {
    console.log("chain id", chainId);
    if (token0Sdks && token1Sdks && RouterSdks) {
      console.log("going in");
      try {
        const functions = [];
        const routerNames: any = [];
        for (let i in RouterSdks) {
          if (token0Sdks[i] && token1Sdks[i]) {
            functions.push(
              RouterSdks[i].Fetcher.fetchPairData(
                token0Sdks[i],
                token1Sdks[i],
                provider
              )
            );
            routerNames.push(i);
          }
        }

        let pairsReturned: any = await Promise.allSettled(functions);
        console.log(pairsReturned);
        let filteredRouterNames: any = [];
        pairsReturned = pairsReturned.filter((item: any, index: any) => {
          if (item.status === "fulfilled") {
            filteredRouterNames.push(routerNames[index]);
            return item.value;
          }
        });

        console.log("pairs", pairsReturned);

        console.log("filtered", filteredRouterNames);

        if (pairsReturned.length === 0) {
          throw "No path found, taking alternate route";
        }

        const pairs = pairsReturned.map((pair: any, index: any) => {
          return {
            dex: filteredRouterNames[index],
            pair: pair.value,
          };
        });

        console.log(pairs);
        setIsMultiPair(false);
        console.log(pairs);
        return pairs;
      } catch (error) {
        console.log(error);
        try {
          console.log(error);

          const functions = [];
          const routerNames: any = [];
          let i: any;
          for (i in RouterSdks) {
            functions.push(
              Promise.all([
                RouterSdks[i].Fetcher.fetchPairData(
                  token0Sdks[Object.keys(RouterSdks)[i]],

                  getWETH(RouterSdks[i].WETH, chainId),
                  provider
                ),
                RouterSdks[i].Fetcher.fetchPairData(
                  token1Sdks[Object.keys(RouterSdks)[i]],
                  getWETH(RouterSdks[i].WETH, chainId),
                  provider
                ),
              ])
            );

            routerNames.push(i);
            console.log(functions);
          }
          let pairsReturned: any = await Promise.allSettled(functions);

          let filteredRouterNames: any = [];
          pairsReturned = pairsReturned.filter((item: any, index: any) => {
            if (item.status === "fulfilled") {
              filteredRouterNames.push(routerNames[index]);
              return item.value;
            }
          });

          if (pairsReturned.length === 0) {
            throw "Insufficient Liquidity error";
          }
          console.log("pairs ", pairsReturned);
          console.log(pairsReturned, routerNames);
          const pairs = pairsReturned.map((pair: any, index: any) => {
            return {
              dex: filteredRouterNames[index],
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

  // for getting use balance

  return (
    <div>
      {tokens.length > 0 && (
        <SwapContext.Provider
          value={{
            tokens,
            setTokens,
            tokenSideSelected,
            setTokenSideSelected,
            setToken0Metadata,
            setToken1Metadata,
            setUpdater,
            setTradeTokens,
            tradeTokens,
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
            token0Sdks,
            token1Sdks,
          }}
        >
          {children}
        </SwapContext.Provider>
      )}
    </div>
  );
};

export default SwapProvider;
