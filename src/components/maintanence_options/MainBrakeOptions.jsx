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
const NotFocused = styled.div`
  width: 87px;
  height: 87px;
  border-radius: 50%;
  background: rgb(47, 46, 46);
  z-index: 1;
`;
const Focused = styled.div`
  width: 112px;
  height: 112px;
  border-radius: 50%;
  background: rgb(47, 46, 46);
  z-index: 1;
`;
const MainBrakeOptions = (props) => {
  return (
    <Wrapper>
      <Capsule>
        <NotFocused></NotFocused>
        <h5>Main Brake Options</h5>
      </Capsule>
      <Capsule>
        <NotFocused></NotFocused>
        <h5>Main Brake Options</h5>
      </Capsule>
      <Capsule>
        <Focused></Focused>
        <h5>Main Brake Options</h5>
      </Capsule>
      <Capsule>
        <NotFocused></NotFocused>
        <h5>Main Brake Options</h5>
      </Capsule>
      <Capsule>
        <NotFocused></NotFocused>
        <h5>Main Brake Options</h5>
      </Capsule>
    </Wrapper>
  );
};
export default MainBrakeOptions;
