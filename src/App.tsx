import React from "react";
import logo from "./logo.svg";
import "./App.css";

import HomeRoutes from "./Routes/HomeRoutes";
import ConnectionProvider from "./context/ConnectionProvider";
import SwapProvider from "./context/SwapProvider";

function App() {
  return (
    <div>
      <ConnectionProvider>
        <SwapProvider>
          <HomeRoutes />
        </SwapProvider>
      </ConnectionProvider>
    </div>
  );
}

export default App;
