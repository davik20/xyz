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
  ChainId as ChainIdPancake,
  WETH as BasePancake,
  Fetcher as FetcherPancake,
  Route as RoutePancake,
  Trade as TradePancake,
  TokenAmount as TokenAmountPancake,
  TradeType as TradeTypePancake,
  Currency as CurrencyPancake,
  Token as TokenPancake,
  Percent as PercentPancake,
  Fraction as FractionPancake,
  Rounding as RoundingPancake,
} from "../dependencies/pancake-swap-sdk/src";

import {
  ChainId as ChainIdAvax,
  WAVAX as BaseWavax,
  Fetcher as FetcherAvax,
  Route as RouteAvax,
  Trade as TradeAvax,
  TokenAmount as TokenAmountAvax,
  TradeType as TradeTypeAvax,
  Currency as CurrencyAvax,
  Token as TokenAvax,
  Percent as PercentAvax,
  Fraction as FractionAvax,
  Rounding as RoundingAvax,
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
export interface PangolinSdkInterface {
  ChainId: typeof ChainIdAvax;
  WETH: any;
  Fetcher: typeof FetcherAvax;
  Route: typeof RouteAvax;
  Trade: typeof TradeAvax;
  TokenAmount: typeof TokenAmountAvax;
  TradeType: typeof TradeTypeAvax;
  Currency: typeof CurrencyAvax;
  Token: typeof TokenAvax;
  Percent: typeof PercentAvax;
  Fraction: typeof FractionAvax;
  Rounding: typeof RoundingAvax;
}

// const uniswapSdk: UniswapSdkInterface = {
//   ChainId: ChainIdEth,
//   WETH: BaseWETH,
//   Fetcher: FetcherEth,
//   Route: RouteEth,
//   Trade: TradeEth,
//   TokenAmount: TokenAmountEth,
//   TradeType: TradeTypeEth,
//   Currency: CurrencyEth,
//   Token: TokenEth,
//   Percent: PercentEth,
//   Fraction: FractionEth,
//   Rounding: RoundingEth,
// };

const pangolinSdk: PangolinSdkInterface = {
  ChainId: ChainIdAvax,
  WETH: BaseWETH,
  Fetcher: FetcherAvax,
  Route: RouteAvax,
  Trade: TradeAvax,
  TokenAmount: TokenAmountAvax,
  TradeType: TradeTypeAvax,
  Currency: CurrencyAvax,
  Token: TokenAvax,
  Percent: PercentAvax,
  Fraction: FractionAvax,
  Rounding: RoundingAvax,
};

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
const pancakeSdk = new RouterSdk(
  ChainIdPancake,
  BasePancake,
  FetcherPancake,
  RoutePancake,
  TradePancake,
  TokenAmountPancake,
  TradeTypePancake,
  CurrencyPancake,
  TokenPancake,
  PercentPancake,
  FractionPancake,
  RoundingPancake
);

const sdks: any = {
  "0x1": {
    uniswap: uniswapSdk,
    // pangolin: pangolinSdk,
  },
  "0x3": {
    uniswap: uniswapSdk,
  },
  "0x4": {
    uniswap: uniswapSdk,
  },
  "0xa86a": {
    pangolin: pangolinSdk,
  },
  "0x38": {
    pancake: pancakeSdk,
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
