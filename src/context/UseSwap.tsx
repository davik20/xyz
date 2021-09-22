import React, { createContext, useContext } from "react";

export const SwapContext = createContext({});

function useSwap() {
  const context = useContext(SwapContext);
  return context;
}

export default useSwap;
