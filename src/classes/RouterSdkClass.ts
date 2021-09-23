import { TokenAmount } from "@uniswap/sdk";

export class RouterSdk {
  ChainId;
  WETH;
  Fetcher;
  Route;
  Trade;
  TokenAmount;
  TradeType;
  Currency;
  Token;
  Percent;
  Fraction;
  Rounding;

  constructor(
    ChainId: any,
    WETH: any,
    Fetcher: any,
    Route: any,
    Trade: any,
    TokenAmount: any,
    TradeType: any,
    Currency: any,
    Token: any,
    Percent: any,
    Fraction: any,
    Rounding: any
  ) {
    this.ChainId = ChainId;
    this.WETH = WETH;
    this.Fetcher = Fetcher;
    this.Route = Route;
    this.Trade = Trade;
    this.TokenAmount = TokenAmount;
    this.TradeType = TradeType;
    this.Currency = Currency;
    this.Token = Token;
    this.Percent = Percent;
    this.Fraction = Fraction;
    this.Rounding = Rounding;
  }
}
