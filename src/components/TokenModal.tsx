import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import useConnection from "../context/UseConnection";
import {
  getTokenContract,
  getBalance,
  amountToWei,
  amountToEther,
} from "../utils/swap";
import useSwap from "../context/UseSwap";
import { on } from "events";
const user: any = [];
let i: any = 0;
for (i; i < 20; i++) {
  user.push(i);
}

console.log(user);

function TokenModal(props: any) {
  const { tokens, closeModal } = props;

  return (
    <Container>
      <Modal>
        <ModalHeader>
          <p>Select a token</p>
          <CloseIcon onClick={closeModal} className="close" />
        </ModalHeader>
        <ModalBody>
          <SearchBar placeholder="Search name or token address"></SearchBar>
          <TokenList>
            <TokenListHeading>
              <p>Token name</p>
              <ArrowDownwardIcon className="icon" />
              {}
            </TokenListHeading>
            <TokenListContent>
              {tokens &&
                tokens.map((token: any, index: number) => (
                  <Token onClose={closeModal} key={index} token={token} />
                ))}
            </TokenListContent>
          </TokenList>
        </ModalBody>
      </Modal>
    </Container>
  );
}

const Token = (props: any) => {
  const { account, web3 }: any = useConnection();
  const {
    setTokens,
    tokenSideSelected,
    tokens,
    setToken0Metadata,
    setToken1Metadata,
    setTradeTokens,
    tradeTokens,
  }: any = useSwap();
  console.log(web3);
  const { token, onClose }: any = props;

  const [balance, setBalance] = useState<any>(0);

  useEffect(() => {
    const contract = getTokenContract(token, web3);

    if (contract && account) {
      const balance = getBalance(contract, account)
        .then((balance: any) => {
          console.log(balance, token.decimals);
          console.log("balance", balance);
          const result = amountToEther(
            web3,
            String(balance),
            String(token.decimals)
          );
          result === "0"
            ? setBalance(0)
            : setBalance(parseFloat(result).toFixed(5));
        })
        .catch((err: any) => {
          console.log("contact fetching error ", err);
        });
    }
  }, []);
  return (
    <TokenListItem
      onClick={() => {
        const tokensCopy = [...tradeTokens];

        if (tokenSideSelected == 0) {
          tokensCopy[0] = token;
          setTradeTokens(tokensCopy);
        } else {
          tokensCopy[1] = token;
          setTradeTokens(tokensCopy);
        }
        onClose();
      }}
    >
      <img src={token?.img} alt="logo" />
      <p className="name">{token?.name}</p>
      <p className="amount">{balance}</p>
    </TokenListItem>
  );
};

export default TokenModal;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Modal = styled.div`
  position: relative;

  top: 7rem;
`;

const ModalHeader = styled.div`
  background-color: #1c274f;
  padding: 1.1rem 1.5rem;
  border-bottom: 1px solid white;
  display: flex;
  align-items: center;

  > .close {
    margin-left: auto;
    cursor: pointer;
  }

  > p {
    font-weight: bold;
  }
`;

const ModalBody = styled.div`
  padding: 0 1.5rem;
  width: 33rem;
  background-color: #1c274f;
  display: block;
  padding-bottom: 3rem;
`;

const SearchBar = styled.input`
  width: 100%;
  background-color: transparent;
  border: 1px solid var(--color-green);
  padding: 1.1rem 1.1rem;
  margin-top: 1.5rem;
  border-radius: 7px;
  color: white;
  font-size: 1.1rem;
  &::placeholder {
    font-size: 1.1rem;
  }
`;

const TokenList = styled.div`
  margin-top: 1.5rem;
`;

const TokenListHeading = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 2.5rem;
  > p {
    font-size: 0.9rem;
  }

  > .icon {
    margin-left: auto;
    font-size: 1rem;
    color: #ffffff96;
  }
`;

const TokenListContent = styled.div`
  height: 20rem;
  overflow-y: scroll;
  padding: 0 1.5rem 0 0;
`;
const TokenListItem = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  > img {
    width: 1.5rem;
  }

  > .name {
    margin-left: 2rem;
    font-weight: bold;
  }

  > .amount {
    margin-left: auto;
  }

  &:not(:last-child) {
    margin-bottom: 2.2rem;
  }
`;
