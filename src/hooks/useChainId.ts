import React, { useEffect, useState } from "react";

function useChainId() {
  const [chainId, setChainId] = useState<Number | null>(null);
  useEffect(() => {
    const window2: any = { ...window };
    if (window2?.ethereum) {
      window2?.ethereum.on("chainChanged", (chainId: Number) => {
        console.log(chainId);
        setChainId(chainId);
      });
    }

    return () => {};
  }, []);

  useEffect(() => {
    const window2: any = { ...window };
    if (window2.ethereum) {
      window2.ethereum
        .request({ method: "eth_chainId" })
        .then((chainId: any) => {
          setChainId(chainId);
        });
    }

    return () => {};
  }, []);

  return chainId;
}

export default useChainId;
