import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Capsule = styled.div`
  width: 130px;
  height: 130px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-top: 42px;
  h5 {
    margin-top: 6px;
  }
`;

const MainBrakeOptions = (props) => {
  return (
    <Wrapper>
      <Capsule>
        <h5>Main Brake Options</h5>
      </Capsule>
      <Capsule>
        <h5>Main Brake Options</h5>
      </Capsule>
      <Capsule>
        <h5>Main Brake Options</h5>
      </Capsule>
      <Capsule>
        <h5>Main Brake Options</h5>
      </Capsule>
      <Capsule>
        <h5>Main Brake Options</h5>
      </Capsule>
    </Wrapper>
  );
};
export default MainBrakeOptions;
