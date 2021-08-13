import React from "react";
import styled from "styled-components";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";

const StyledLoading = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: hsla(43, 5%, 98%, 0.8);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  & div {
    font-size: 3rem;
  }

`;

function Loading() {
  return (
    <StyledLoading>
      <div>
        <h4>Fetching Data...</h4>
        <Spinner animation="grow" role="status"/>
      </div>
    </StyledLoading>
  );
}

export default Loading;
