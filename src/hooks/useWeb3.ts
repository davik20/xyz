import React, { useEffect, useState } from "react";
import Web3 from "web3";

function useWeb3(chainId: Number | null) {
  const [web3, setWeb3] = useState<Web3 | any>(null);
  const [account, setAccount] = useState<String | null>(null);

  const [provider, setProvider] = useState<any>(null);

  useEffect(() => {
    const window2: any = { ...window };
    if (window2.ethereum) {
      window2?.ethereum.on("accountsChanged", (accounts: String[]) => {
        console.log(account);
        setAccount(accounts[0]);
      });
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      const window2: any = { ...window };
      if (window2.ethereum) {
        console.log(" chain id", chainId);
        const web3 = new Web3(window2.ethereum);
        setProvider(window2.ethereum);
        setWeb3(web3);
      }
    };
    console.log("chaining");

    init();
  }, [chainId]);

  return [provider, web3];
}

export default useWeb3;
