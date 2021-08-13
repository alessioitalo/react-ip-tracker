import React, { useState } from "react";
import styled from "styled-components";
import iconArrow from "../images/icon-arrow.svg";

const StyledInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 800px) {
    width: 50%;
    min-width: 10rem;
    margin: auto;
  }
  & input {
    width: 70%;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    height: 100%;
    min-height: 3.5rem;
    padding: 0 1rem;
    cursor: pointer;
  }

  & button {
    min-height: 3.7rem;
    height: 100%;
    width: 10%;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background-image: url(${iconArrow});
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
  }

  & input,
  button,
  input:active,
  input:focus,
  button:active,
  button:focus {
    border: none;
    outline: none;
  }
`;

function Input(props) {
  const [inputValue, setInputvalue] = useState();

  const changeInputHandler = (e) => {
    setInputvalue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.fetchData(inputValue);
  };

  return (
    <form onSubmit={submitHandler}>
      <StyledInput onChange={changeInputHandler}>
        <input placeholder="Search for any IP address or domain..." />
        <button type="submit" />
      </StyledInput>
    </form>
  );
}

export default Input;
