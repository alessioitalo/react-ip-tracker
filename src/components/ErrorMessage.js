import styled from "styled-components";
import Modal from "./Modal";

const StyledErrorMessage = styled.div`
  z-index: 4;
  background: white;
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 2rem;

  & button {
    min-width: 4rem;
    border-radius: 20px;
    border: none;
  }
`;

function ErrorMessage(props) {
  return (
    <Modal>
      <StyledErrorMessage id="error">
        <h4>Whoops! Something went wrong.</h4>
        <p>
          Please make sure you are entering a valid IP address or domain name.
        </p>
        <button onClick={props.closeError}>OK</button>
      </StyledErrorMessage>
    </Modal>
  );
}

export default ErrorMessage;
