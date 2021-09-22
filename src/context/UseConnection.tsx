import React, { createContext, useContext } from "react";

export const ConnectionContext = createContext({});

function useConnection() {
  const context = useContext(ConnectionContext);
  return context;
}

export default useConnection;
