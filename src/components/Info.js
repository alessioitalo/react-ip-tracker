import React from "react";
import styled from "styled-components";

const StyledInfo = styled.div`
  background: white;
  width: 80%;
  position: absolute;
  top: 25%;
  left: 10%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  min-width: 200px;
  padding: 2.5rem 0;

  @media (min-width: 800px) {
    flex-direction: row;
  }
  & > div {
    padding: 0.5rem 2rem;
    width: 100%;
    color: hsl(0, 0%, 59%);
    font-size: 0.8rem;
    font-weight: 500;
    @media (min-width: 800px) {
      width: 25%;
      text-align: left;
    }
  }

  & strong {
    color: hsl(0, 0%, 17%);
    font-weight: 500;
    font-size: 1.2rem;
  }

  & .with-line {
    @media (min-width: 800px) {
      border-left: 1px solid hsl(0, 0%, 59%);
    }
  }
`;

function Info(props) {
  const formattedTimezone = `${props.ipResponse.timezone}`.split("/");

  return (
    <StyledInfo>
      <div>
        IP ADDRESS
        <div>
          <strong>{props.ipResponse.query}</strong>
        </div>
      </div>

      <div className="with-line">
        LOCATION
        <div>
          <strong>{`${props.ipResponse.city} ${props.ipResponse.regionName} ${props.ipResponse.countryCode}`}</strong>
        </div>
      </div>
      <div className="with-line">
        TIMEZONE
        <div>
          <strong>{formattedTimezone}</strong>
        </div>
      </div>
      <div className="with-line">
        ISP
        <div>
          <strong>{props.ipResponse.isp}</strong>
        </div>
      </div>
    </StyledInfo>
  );
}

export default Info;
