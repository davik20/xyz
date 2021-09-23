import React, { useContext } from "react";
import styled from "styled-components";
import useConnection from "../context/UseConnection";

function Navbar() {
  const { provider, updateProvider }: any = useConnection();

  console.log(provider);

  return (
    <NavbarContainer>
      <NavbarContent>
        <Logo>
          <img src={`${process.env.PUBLIC_URL}/logo192.png`} />
        </Logo>
        <NavLinks>
          <ul>
            {" "}
            <li>
              <a href="#">Tracker</a>
            </li>
            <li>
              <a href="#">Swap</a>
            </li>
            <li>
              <a href="#">Ecosystem</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </NavLinks>
        <Account>0x2838488</Account>
      </NavbarContent>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.div`
  height: 100%;
  height: 4rem;
  width: 100%;
  position: relative;
  color: white;
  z-index: 100;
`;

const NavbarContent = styled.div`
  position: fixed;
  width: 100%;
  padding: 0.7rem var(--container-padding);
  left: 0;
  top: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  overflow: hidden;
  backdrop-filter: blur(10px);
`;

const Logo = styled.div`
  & > img {
    width: 50px;
    height: 50px;
  }
`;

const NavLinks = styled.div`
  margin-left: auto;
  > ul {
    display: flex;
    list-style: none;
  }

  > ul > li {
    margin-right: 2rem;
  }

  > ul > li > a {
    text-decoration: none;
    font-size: 1.1rem;
    font-family: var(--font-header);
    text-transform: uppercase;
    color: white;
  }
`;

const Account = styled.div`
  background-color: var(--color-pink);
  padding: 0.7rem 1.7rem;
  border-radius: 7px;
`;
export default Navbar;
