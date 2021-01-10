import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  background: yellow;
  justify-content: space-evenly;
  align-items: center;
`;

const Capsule = styled.div`
  width: 130px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background: pink;
  h5 {
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
const HoodOptions = (props) => {
  return (
    <Wrapper>
      <Capsule>
        <h5>Hood Options</h5>
      </Capsule>
      <Capsule>
        <h5>Hood Options</h5>
      </Capsule>
      <Capsule>
        <h5>Hood Options</h5>
      </Capsule>
      <Capsule>
        <h5>Hood Options</h5>
      </Capsule>
      <Capsule>
        <h5>Hood Options</h5>
      </Capsule>
    </Wrapper>
  );
};
export default HoodOptions;
