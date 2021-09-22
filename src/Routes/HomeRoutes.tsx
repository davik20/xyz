import React from "react";
import Navbar from "../components/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Swap from "../pages/Swap";
import styled from "styled-components";

function HomeRoutes() {
  return (
    <Home>
      <Navbar />
      <Switch>
        {" "}
        .
        <Route exact path="/swap" component={Swap} />
        <Route path="/not-found" render={() => <div> </div>} />
        <Redirect to="/not-found" />
      </Switch>
    </Home>
  );
}

const Home = styled.div`
  height: 200rem;
  background-color: var(--color-brown);
  color: white;
  font-family: var(--font-default);
`;

export default HomeRoutes;
