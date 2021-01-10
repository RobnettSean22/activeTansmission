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

const TireOptions = (props) => {
  return (
    <Wrapper>
      <Capsule>
        <h5>Tire Options</h5>
      </Capsule>
      <Capsule>
        <h5>Tire Options</h5>
      </Capsule>
      <Capsule>
        <h5>Tire Options</h5>
      </Capsule>
      <Capsule>
        <h5>Tire Options</h5>
      </Capsule>
      <Capsule>
        <h5>Tire Options</h5>
      </Capsule>
    </Wrapper>
  );
};
export default TireOptions;
