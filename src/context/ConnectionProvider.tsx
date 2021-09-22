import React, { useEffect, useState, useMemo } from "react";
import useChainId from "../hooks/useChainId";
import useWeb3 from "../hooks/useWeb3";
import { ConnectionContext } from "./UseConnection";

interface Props {
  children: JSX.Element;
}

const ConnectionProvider: React.FC<Props> = ({ children }) => {
  // const [provider, setProvider] = useState<any>(
  //   // "https://mainnet.infura.io/v3/3ee5b26be9d9451b96c018232c629555"
  // );

  const [account, setAccount] = useState<any>("");
  const chainId = useChainId();

  const [provider, web3] = useWeb3(chainId);

  const connectWallet = useMemo(() => {
    return () => {
      const window2: any = { ...window };
      if (window2.ethereum) {
        window2.ethereum
          .request({ method: "eth_requestAccounts" })
          .then((accounts: String[]) => {
            setAccount(accounts[0]);
          });
      }
    };
  }, []);

  return useMemo(() => {
    return (
      <div>
        {web3?.currentProvider && (
          <ConnectionContext.Provider
            value={{
              account,
              chainId,
              provider,
              web3,

              connectWallet,
            }}
          >
            {children}
          </ConnectionContext.Provider>
        )}
      </div>
    );
  }, [web3, account, chainId, children, provider, connectWallet]);
};

export default ConnectionProvider;
