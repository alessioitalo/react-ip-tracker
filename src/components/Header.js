import React from "react";
import styled from "styled-components";
import logoBackground from "../images/pattern-bg.png";
import Input from "./Input";

const StyledHeader = styled.div`
  background-image: url(${logoBackground});
  background-repeat: no-repeat;
  background-size: auto;
  background-position: 55% 0%;
  height: 15rem;
  width: 100%;
  padding-top: 2rem;

  & p {
    color: white;
    font-weight: 500;
    font-size: 1.5rem;
  }
`;

function Header(props) {
  return (
    <StyledHeader>
      <p>IP Address Tracker</p>
      <Input fetchData={props.fetchData} />
    </StyledHeader>
  );
}

export default Header;
