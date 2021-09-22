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

function Swap() {
  const { web3, account, connectWallet }: any = useConnection();

  const {
    pair,
    token0Metadata,
    token1Metadata,
    tokens,
    SDK,
    token0Sdk,
    token1Sdk,
  }: any = useSwap();
  const [tokenInput0, setTokenInput0] = useState<any>("");
  const [tokenInput1, setTokenInput1] = useState<any>("");
  const [isRotated, setIsRotated] = useState(false);

  const [swappable, setSwappable] = useState<any>(false);
  const [tokenBalance0, setTokenBalance0] = useState(0);
  const [insufficientLiquidityError, setInsufficientLiquidityError] = useState(
    false
  );
  const [swapLoading, setSwapLoading] = useState(false);

  const handleInput = (
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

      if (pair.length === 1 && SDK) {
        getOutputAmount(
          web3,
          token0Sdk,
          SDK.TokenAmount,
          pair,
          SDK.Fraction,
          SDK.Rounding,
          SDK.Route,
          SDK.Trade,
          SDK.TradeType,
          value
        ).then((result: any) => {
          console.log("pair length is one");
          if (result?.length > 1) {
            const [output, path, trade]: any = result;
            setTokenInput1(output);
          }
        });
      } else if (pair.length > 1) {
        getOutputAmount2(
          web3,
          token0Sdk,
          SDK.TokenAmount,
          pair,
          type,
          SDK.Fraction,
          SDK.Rounding,
          SDK.Route,
          SDK.Trade,
          SDK.TradeType,
          value
        ).then((result: any) => {
          console.log("pair length is one");
          if (result?.length > 1) {
            const [output, path, trade]: any = result;
            setTokenInput1(output);
          }
        });
      }
    } else if (type === 1) {
      if (value === "") {
        setTokenInput0("");
      }
      setTokenInput1(value);

      // getOutput amout and return
      if (pair.length === 1) {
        getOutputAmount(
          web3,
          token1Sdk,
          SDK.TokenAmount,
          pair,
          SDK.Fraction,
          SDK.Rounding,
          SDK.Route,
          SDK.Trade,
          SDK.TradeType,
          value
        ).then((result: any) => {
          console.log("pair length is one");
          if (result?.length > 1) {
            const [output, path, trade]: any = result;
            setTokenInput0(output);
          }
        });
      } else if (pair.length > 1) {
        getOutputAmount2(
          web3,
          token1Sdk,
          SDK.TokenAmount,
          pair,
          type,
          SDK.Fraction,
          SDK.Rounding,
          SDK.Route,
          SDK.Trade,
          SDK.TradeType,
          value
        ).then((result: any) => {
          console.log("pair length is one");
          if (result?.length > 1) {
            const [output, path, trade]: any = result;
            setTokenInput0(output);
          }
        });
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
                <ArrowDropDownIcon className="connect" />
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
        </SwapBox>
      </SwapContent>
    </SwapContainer>
  );
}

const SwapContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

const SwapContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const SwapBox = styled.div`
  margin-top: 8rem;
  min-height: 20rem;
  width: 30rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  background-color: var(--color-brown-2);
  box-shadow: 5px 5px 10px rgba(5, 1, 1, 0.1);
`;
const SwapHeader = styled.div`
  display: flex;
  align-items: center;
  & > h3 {
    color: rgba(255, 255, 255, 0.8);
  }
  & > div {
    margin-left: auto;
    display: flex;
    align-items: center;
  }
`;

const Tool = styled.div`
  background-color: grey;
  margin-right: 1rem;
  padding: 0.1rem 0.2rem;
  border-radius: 2px;
  cursor: pointer;
`;

const Connect = styled.div`
  padding: 0.2rem 0.4rem;
  background-color: var(--color-pink);
  cursor: pointer;
  display: flex;
  border-radius: 2px;
  align-items: center;
  & > p {
    font-size: 1rem;
  }
  & > .connect {
    color: var(--color-white);
    cursor: pointer;
  }
`;

const SwapBody = styled.div`
  margin-top: 3rem;

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
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const TokenInput0 = styled.input`
  width: 50%;
  padding-right: 10%;
  outline: none;
  border: none;
  color: white;
  background-color: transparent;
  font-size: 1rem;
`;

const Max = styled.button`
  border: none;
  outline: none;
  padding: 1.2px;
  border-radius: 2px;
  cursor: pointer;
`;
const TokenSelect0 = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  margin-left: 20%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0 0.5rem 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  width: 7rem;
  > img {
    width: 20px;
    height: 20px;
    object-fit: cover;
  }

  > p {
    margin-left: 0.5rem;
    font-size: 0.8rem;
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
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  padding: 1rem;
  font-size: 1.2rem;
  justify-content: center;
  border-radius: 10px;
  width: 100%;
  cursor: pointer;
  border-top: 1px solid rgba(0, 0, 0, 0.01);
`;

export default Swap;
