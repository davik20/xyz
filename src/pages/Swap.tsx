import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import useConnection from "../context/UseConnection";
import useSwap from "../context/UseSwap";
import SettingsIcon from "@material-ui/icons/Settings";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SwapHorizontalCircleOutlinedIcon from "@material-ui/icons/SwapHorizontalCircleOutlined";
import "../styles/swap.css";
import { getOutputAmount, getOutputAmount2 } from "../utils/getOutputAmount";
import { getSDK, UniswapSdkInterface } from "../utils/router";
import { ClipLoader } from "react-spinners";
import { Divider } from "@material-ui/core";

function Swap() {
  const { web3, account, connectWallet }: any = useConnection();

  const {
    pair,
    pairs,
    token0Metadata,
    token1Metadata,
    tokens,
    RouterSdks,
    SDK,
    token0Sdks,
    token1Sdks,
    token0Sdk,
    token1Sdk,
    isMultiPair,
  }: any = useSwap();
  const [tokenInput0, setTokenInput0] = useState<any>("");
  const [tokenInput1, setTokenInput1] = useState<any>("");
  const [isRotated, setIsRotated] = useState(false);
  const [tradeEntity, setTradeEntity] = useState<any>(null);
  const [selectedTradeEntity, setSelectedTradeEntity] = useState<null>(null);
  const [swappable, setSwappable] = useState<any>(false);
  const [tokenBalance0, setTokenBalance0] = useState(0);
  const [insufficientLiquidityError, setInsufficientLiquidityError] = useState(
    false
  );
  const [swapLoading, setSwapLoading] = useState(false);

  const handleInput = async (
    e: React.ChangeEvent<HTMLInputElement>,
    type: Number
  ) => {
    const value = e.target.value;

    if (type === 0) {
      if (value === "") {
        setTokenInput1("");
      }

      setTokenInput0(value);
      // getOutput amout and return

      if (!isMultiPair && RouterSdks && pairs) {
        console.log("pari length");
        try {
          console.log(isMultiPair);
          const functions: any = [];
          console.log(pairs);
          pairs.forEach((pair: any) => {
            const SDK = RouterSdks[pair.dex];
            console.log(SDK);
            functions.push(
              getOutputAmount(
                web3,
                token0Sdks[pair.dex],
                SDK.TokenAmount,
                pair.pair,
                SDK.Fraction,
                SDK.Rounding,
                SDK.Route,
                SDK.Trade,
                SDK.TradeType,
                value,
                pair.dex
              )
            );
          });

          console.log(functions);
          let result: any = await Promise.all(functions);
          console.log("result ", result);
          // sort result from highest to lowest
          result = result.sort((a: any, b: any) => {
            return b.output - a.output;
          });

          console.log(result[0]);
          setTokenInput1(result[0][0]);

          setTradeEntity(result);
          setSelectedTradeEntity(result[0]);
        } catch (error) {
          console.log(error);
        }
      } else if (isMultiPair && pairs) {
        const functions: any = [];
        pairs.forEach((pair: any) => {
          const SDK = RouterSdks[pair.dex];

          functions.push(
            getOutputAmount2(
              web3,
              token0Sdks[pair.dex],
              SDK.TokenAmount,
              pair.pair,
              type,
              SDK.Fraction,
              SDK.Rounding,
              SDK.Route,
              SDK.Trade,
              SDK.TradeType,
              value,
              pair.dex
            )
          );
        });

        let result: any = await Promise.all(functions);
        console.log(result);
        // sort result from highest to lowest
        result = result.sort((a: any, b: any) => {
          return b.output - a.output;
        });

        console.log(result);
        setTokenInput1(result[0][0]);
        console.log(result[0]);
        setTradeEntity(result);
        setSelectedTradeEntity(result[0]);
      }
    } else if (type === 1) {
      if (value === "") {
        setTokenInput0("");
      }
      setTokenInput1(value);

      // getOutput amout and return
      if (!isMultiPair && RouterSdks && pairs) {
        console.log("pari length");
        try {
          console.log(isMultiPair);
          const functions: any = [];
          console.log(pairs);
          pairs.forEach((pair: any) => {
            const SDK = RouterSdks[pair.dex];
            console.log(SDK);
            functions.push(
              getOutputAmount(
                web3,
                token1Sdk,
                SDK.TokenAmount,
                pair.pair,
                SDK.Fraction,
                SDK.Rounding,
                SDK.Route,
                SDK.Trade,
                SDK.TradeType,
                value,
                pair.dex
              )
            );
          });

          console.log(functions);
          let result: any = await Promise.all(functions);
          console.log("result ", result);
          // sort result from highest to lowest
          result = result.sort((a: any, b: any) => {
            return b.output - a.output;
          });

          console.log(result);
          setTokenInput0(result[0][0]);

          setTradeEntity(result);
          setSelectedTradeEntity(result[0]);
        } catch (error) {
          console.log(error);
        }
      } else if (isMultiPair && pairs.length > 0) {
        const functions: any = [];
        pairs.forEach((pair: any) => {
          const SDK = RouterSdks[pair.dex];

          functions.push(
            getOutputAmount2(
              web3,
              token1Sdk,
              SDK.TokenAmount,
              pair.pair,
              type,
              SDK.Fraction,
              SDK.Rounding,
              SDK.Route,
              SDK.Trade,
              SDK.TradeType,
              value,
              [pair.dex]
            )
          );
        });

        let result: any = await Promise.all(functions);

        // sort result from highest to lowest
        result = result.sort((a: any, b: any) => {
          return b.output - a.output;
        });

        console.log(result);
        setTokenInput0(result[0][0]);
        setTradeEntity(result);
        setSelectedTradeEntity(result[0]);
      }
    }
  };

  const renderSwapButton = () => {
    if (tokenBalance0 && account) {
      if (
        tokenInput0 === "" ||
        Number(tokenInput0) === 0 ||
        isNaN(tokenInput0)
      ) {
        return (
          <SwapButton style={{ backgroundColor: "grey" }}>
            Enter An Amount
          </SwapButton>
        );
      } else if (
        Number(tokenInput0) > Number(tokenBalance0) &&
        Number(tokenInput0) > 0
      ) {
        return (
          <SwapButton style={{ backgroundColor: "grey" }}>
            Insufficient {`${token0Metadata.symbol}`} Balance
          </SwapButton>
        );
      } else if (!swappable) {
        return (
          <SwapButton onClick={() => console.log("approve")}>
            {swapLoading ? <ClipLoader size={10} /> : "Approve"}
          </SwapButton>
        );
      } else if (insufficientLiquidityError) {
        return (
          <SwapButton style={{ backgroundColor: "grey" }}>
            Insufficient Liquidity
          </SwapButton>
        );
      } else {
        return (
          <SwapButton onClick={() => console.log("davik")}>
            {swapLoading ? <ClipLoader size={10} /> : "Swap"}
          </SwapButton>
        );
      }
    } else if (account && !tokenBalance0) {
      return (
        <SwapButton
          style={{ backgroundColor: "grey" }}
          onClick={() => console.log("Unspported chain")}
        >
          Unsupported Chain
        </SwapButton>
      );
    } else {
      return (
        <SwapButton onClick={() => connectWallet()}>
          Connect a wallet
        </SwapButton>
      );
    }
  };

  return (
    <SwapContainer>
      <SwapContent>
        <SwapBox>
          <SwapBoxInner>
            <SwapHeader>
              <h3>Swap</h3>
              <div>
                <Tool className="hover">
                  <AutorenewIcon />
                </Tool>
                <Tool className="hover">
                  <SettingsIcon />
                </Tool>
                <Connect>
                  <p>Connect</p>
                  {/* <ArrowDropDownIcon className="connect" /> */}
                </Connect>
              </div>
            </SwapHeader>
            <SwapBody>
              <InputContainer0>
                <TokenInput0
                  value={tokenInput0}
                  type="number"
                  onChange={(e) => handleInput(e, 0)}
                  placeholder="0.00"
                />
                <Max className="hover"> Max </Max>
                <TokenSelect0>
                  <img
                    src={token0Metadata && token0Metadata.img}
                    alt="token logo"
                  />
                  <p>{token0Metadata && token0Metadata.symbol}</p>
                  <ArrowDropDownIcon className="icon" />
                </TokenSelect0>
              </InputContainer0>
              <SwapHorizontalCircleOutlinedIcon
                className="swap-icon"
                style={{ transition: " all .3s" }}
                onClick={(
                  e: React.MouseEvent<SVGSVGElement, MouseEvent> | any
                ) => {
                  if (!isRotated) {
                    e.target.style.transform = "rotate(180deg)";
                    setIsRotated(true);
                  }
                  if (isRotated) {
                    e.target.style.transform = "rotate(-180deg)";
                    setIsRotated(false);
                  }
                }}
              />
              <InputContainer1>
                <TokenInput1
                  value={tokenInput1}
                  type="number"
                  onChange={(e) => handleInput(e, 1)}
                  placeholder="0.00"
                />

                <TokenSelect1>
                  <img
                    src={token1Metadata && token1Metadata.img}
                    alt="token logo"
                  />
                  <p>{token1Metadata && token1Metadata.symbol}</p>
                  <ArrowDropDownIcon className="icon" />
                </TokenSelect1>
              </InputContainer1>
              {renderSwapButton()}
            </SwapBody>
          </SwapBoxInner>
          <DexPanel>
            <DexPanelHeader>
              <h3>Price Impact</h3>
              <p>0.34</p>
            </DexPanelHeader>
            <DexPanelBody>
              <DexList>
                {tradeEntity &&
                  tradeEntity.map((item: any, index: any, array: any) => {
                    {
                      console.log("item", item);
                    }
                    return (
                      <DexListItem>
                        <div>
                          <span>
                            <img
                              src="https://ethereum-optimism.github.io/logos/UNI.png"
                              alt="logo"
                            />
                          </span>{" "}
                          <p>{item[3].toUpperCase()}</p>
                        </div>
                        <Price color="green">
                          <p>{parseFloat(item[0]).toFixed(5)}</p>{" "}
                          <span>Best</span>
                        </Price>
                      </DexListItem>
                    );
                  })}

                <DexListItem>
                  <div>
                    <span>
                      <img
                        src="https://ethereum-optimism.github.io/logos/UNI.png"
                        alt="logo"
                      />
                    </span>{" "}
                    Lydia
                  </div>
                  <Price color="red">
                    <p>8195.4</p> <span>-0.321</span>
                  </Price>
                </DexListItem>
              </DexList>
            </DexPanelBody>
          </DexPanel>
        </SwapBox>
      </SwapContent>
    </SwapContainer>
  );
}

const SwapContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: var(--blue-dark);
`;

const SwapContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
`;
const SwapBox = styled.div`
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.06));
  margin-top: 8rem;
  min-height: 20rem;
  width: 30rem;
  position: relative;

  border-radius: 1rem;
  background: linear-gradient(
    245.22deg,
    var(--color-pink) 7.97%,
    var(--color-blue) 49.17%,
    var(--color-green) 92.1%
  );
  box-shadow: 2px 5px 20px #d82eef2b, 0px 10px 50px #d82eef3b,
    0 -5px 20px #2b6bff2d, 0 -10px 50px #2b6bff6a, -5px 5px 20px #39d0d83b,
    -10px 10px 50px #39d0d837;
  padding: 1px;
`;

const SwapBoxInner = styled.div`
  border-radius: 1rem;

  padding: 1rem 2rem;
  z-index: 4;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(19, 26, 53, 0.9);

  backdrop-filter: opacity(0.3);
`;
const SwapHeader = styled.div`
  display: flex;
  align-items: center;
  & > h3 {
    color: rgba(255, 255, 255, 0.8);
    font-family: var(--font-header);
  }
  & > div {
    margin-left: auto;
    display: flex;
    align-items: center;
  }
`;

const Tool = styled.div`
  margin-right: 1rem;
  padding: 0.1rem 0.2rem;
  border-radius: 2px;
  cursor: pointer;
`;

const Connect = styled.div`
  padding: 0.7rem 1.2rem;
  padding-left: 1rem;
  background-color: var(--color-blue);
  cursor: pointer;
  display: flex;
  border-radius: 5px;
  align-items: center;

  & > p {
    font-size: 0.6rem;
    letter-spacing: 3px;
    font-weight: bold;
    text-transform: uppercase;
  }
  & > .connect {
    color: var(--color-white);
    cursor: pointer;
  }
`;

const SwapBody = styled.div`
  margin-top: 3rem;
  background: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > .swap-icon {
    color: rgba(255, 255, 255, 0.3);
    font-size: 2rem;
    cursor: pointer;
  }
`;

const InputContainer0 = styled.div`
  width: 100%;
  padding: 1rem 1rem;
  display: flex;
  z-index: 1;

  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  background-color: #000829;
  margin-bottom: 1rem;
`;

const TokenInput0 = styled.input`
  width: 50%;
  padding-right: 10%;
  outline: none;
  border: none;
  color: white;
  background-color: transparent;
  font-size: 1.2rem;
`;

const Max = styled.button`
  border: none;
  outline: none;
  padding: 4px;
  border-radius: 2px;
  cursor: pointer;
`;
const TokenSelect0 = styled.div`
  margin-left: 20%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0 0.5rem 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  width: 7rem;
  > img {
    width: 25px;
    height: 25px;
    object-fit: cover;
  }

  > p {
    margin-left: 0.5rem;
    font-size: 0.9rem;
  }

  > .icon {
    margin-left: auto;
  }
`;

const InputContainer1 = styled(InputContainer0)`
  margin-top: 1rem;
`;

const TokenInput1 = styled(TokenInput0)``;

const TokenSelect1 = styled(TokenSelect0)`
  margin-left: auto;
`;

const SwapButton = styled.div`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  border: 1px solid var(--color-blue);
  display: flex;
  padding: 1rem;
  font-size: 1.2rem;
  justify-content: center;
  border-radius: 10px;
  width: 100%;
  cursor: pointer;
`;

const slideDown = keyframes`
from {
  opacity: 0;
  transform: translateY(-40px);
}
to {
  opacity: 1
  transform: translateY(0px)
}
`;
const DexPanel = styled.div`
  z-index: -1;
  background-color: #151533;

  width: 90%;
  left: 6%;
  display: block;
  position: absolute;

  border-radius: 10px;
  animation-name: ${slideDown};
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
  padding: 2rem;

  /* border: 1px solid white; */
`;

const DexPanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  > h3 {
    font-weight: 400;
  }
`;
const DexPanelBody = styled.div``;
const DexList = styled.div`
  margin-top: 1rem;
`;
const DexListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    display: flex;
    align-items: center;

    > span > img {
      width: 20px;
      margin-right: 0.4rem;
    }
  }

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const Price = styled.div`
  > p {
    font-size: 0.9rem;
    margin-right: 0.8rem;
  }
  > span {
    font-size: 0.9rem;
    background-color: ${(props) => props.color};
    border-radius: 8px;
    padding: 0.3rem 0.5rem;
  }
`;

export default Swap;

/// #151533;
