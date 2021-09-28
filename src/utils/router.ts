import {
  ChainId as ChainIdEth,
  WETH as BaseWETH,
  Fetcher as FetcherEth,
  Route as RouteEth,
  Trade as TradeEth,
  TokenAmount as TokenAmountEth,
  TradeType as TradeTypeEth,
  Currency as CurrencyEth,
  Token as TokenEth,
  Percent as PercentEth,
  Fraction as FractionEth,
  Rounding as RoundingEth,
} from "@uniswap/sdk";

import {
  ChainId as ChainIdCanary,
  WAVAX as BaseCanary,
  Fetcher as FetcherCanary,
  Route as RouteCanary,
  Trade as TradeCanary,
  TokenAmount as TokenAmountCanary,
  TradeType as TradeTypeCanary,
  Currency as CurrencyCanary,
  Token as TokenCanary,
  Percent as PercentCanary,
  Fraction as FractionCanary,
  Rounding as RoundingCanary,
} from "@canarydex/sdk";

import {
  ChainId as ChainIdTraderJoe,
  WAVAX as BaseTraderJoe,
  Fetcher as FetcherTraderJoe,
  Route as RouteTraderJoe,
  Trade as TradeTraderJoe,
  TokenAmount as TokenAmountTraderJoe,
  TradeType as TradeTypeTraderJoe,
  Currency as CurrencyTraderJoe,
  Token as TokenTraderJoe,
  Percent as PercentTraderJoe,
  Fraction as FractionTraderJoe,
  Rounding as RoundingTraderJoe,
} from "@traderjoe-xyz/sdk";

// import {
//   ChainId as ChainIdQuickSwap,
//   WAVAX as BaseQuickSwap,
//   Fetcher as FetcherQuickSwap,
//   Route as RouteQuickSwap,
//   Trade as TradeQuickSwap,
//   TokenAmount as TokenAmountQuickSwap,
//   TradeType as TradeTypeQuickSwap,
//   Currency as CurrencyQuickSwap,
//   Token as TokenQuickSwap,
//   Percent as PercentQuickSwap,
//   Fraction as FractionQuickSwap,
//   Rounding as RoundingQuickSwap,
// } from "quickswap/sdk";

import {
  ChainId as ChainIdPangolin,
  WAVAX as BasePangolin,
  Fetcher as FetcherPangolin,
  Route as RoutePangolin,
  Trade as TradePangolin,
  TokenAmount as TokenAmountPangolin,
  TradeType as TradeTypePangolin,
  Currency as CurrencyPangolin,
  Token as TokenPangolin,
  Percent as PercentPangolin,
  Fraction as FractionPangolin,
  Rounding as RoundingPangolin,
} from "@pangolindex/sdk";

import { ethers } from "ethers";
import { mapHexToNumber } from "./swap";
import { RouterSdk } from "../classes/RouterSdkClass";

export interface UniswapSdkInterface {
  ChainId: typeof ChainIdEth;
  WETH: any;
  Fetcher: typeof FetcherEth;
  Route: typeof RouteEth;
  Trade: typeof TradeEth;
  TokenAmount: typeof TokenAmountEth;
  TradeType: typeof TradeTypeEth;
  Currency: typeof CurrencyEth;
  Token: typeof TokenEth;
  Percent: typeof PercentEth;
  Fraction: typeof FractionEth;
  Rounding: typeof RoundingEth;
}

const uniswapSdk = new RouterSdk(
  ChainIdEth,
  BaseWETH,
  FetcherEth,
  RouteEth,
  TradeEth,
  TokenAmountEth,
  TradeTypeEth,
  CurrencyEth,
  TokenEth,
  PercentEth,
  FractionEth,
  RoundingEth
);
const canarySdk = new RouterSdk(
  ChainIdCanary,
  BaseCanary,
  FetcherCanary,
  RouteCanary,
  TradeCanary,
  TokenAmountCanary,
  TradeTypeCanary,
  CurrencyCanary,
  TokenCanary,
  PercentCanary,
  FractionCanary,
  RoundingCanary
);

const pangolinSdk = new RouterSdk(
  ChainIdPangolin,
  BasePangolin,
  FetcherPangolin,
  RoutePangolin,
  TradePangolin,
  TokenAmountPangolin,
  TradeTypePangolin,
  CurrencyPangolin,
  TokenPangolin,
  PercentPangolin,
  FractionPangolin,
  RoundingPangolin
);
const traderJoeSdk = new RouterSdk(
  ChainIdTraderJoe,
  BaseTraderJoe,
  FetcherTraderJoe,
  RouteTraderJoe,
  TradeTraderJoe,
  TokenAmountTraderJoe,
  TradeTypeTraderJoe,
  CurrencyTraderJoe,
  TokenTraderJoe,
  PercentTraderJoe,
  FractionTraderJoe,
  RoundingTraderJoe
);
// const quickSwapSdk = new RouterSdk(
//   ChainIdQuickSwap,
//   BaseQuickSwap,
//   FetcherQuickSwap,
//   RouteQuickSwap,
//   TradeQuickSwap,
//   TokenAmountQuickSwap,
//   TradeTypeQuickSwap,
//   CurrencyQuickSwap,
//   TokenQuickSwap,
//   PercentQuickSwap,
//   FractionQuickSwap,
//   RoundingQuickSwap
// );

const sdks: any = {
  "0x1": {
    quickSwap: uniswapSdk,
    uniswap: uniswapSdk,
  },
  "0x3": {
    uniswap: uniswapSdk,
  },
  "0x4": {
    uniswap: uniswapSdk,
  },
  "0xa86a": {
    pangolin: pangolinSdk,
    traderJoe: traderJoeSdk,
  },
  "0x38": {
    // pancake: pancakeSdk,
  },
};

export const getSDK = (chainId: any, dex: any) => {
  if (chainId) {
    return sdks[chainId];
  }
};

export const sdkProvider = (chainId: any) => {
  if (chainId) {
    const chainIdMapping: any = {
      "0x1": "homestead",
      "0x3": "ropsten",
      "0x4": "rinkeby",
      "0xa86a": "homestead",
    };
    console.log("sdk provider", chainIdMapping[String(chainId)]);
    return new ethers.providers.InfuraProvider(
      chainIdMapping[String(chainId)],
      "3ee5b26be9d9451b96c018232c629555"
    );
  }
};

export const getWETH = (WETH: any, chainId: any) => {
  return WETH[mapHexToNumber[chainId]];
};
