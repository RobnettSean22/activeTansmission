import React from "react";
import styled from "styled-components";
import "../css_sheets/options.scss";

const Wrapper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;

  justify-content: space-evenly;
  align-items: center;
`;

const BrakesOptions = ({ repFrameOps, setRepFrameOps }) => {
  return (
    <Wrapper>
      <div
        onClick={(e) => setRepFrameOps(1)}
        className={repFrameOps === 1 ? "targeted" : "untargeted"}
      >
        <h5>Frame Options</h5>
      </div>
      <div
        onClick={(e) => setRepFrameOps(2)}
        className={repFrameOps === 2 ? "targeted" : "untargeted"}
      >
        <h5>Frame Options</h5>
      </div>
      <div
        onClick={(e) => setRepFrameOps(3)}
        className={repFrameOps === 3 ? "targeted" : "untargeted"}
      >
        <h5>Frame Options</h5>
      </div>
      <div
        onClick={(e) => setRepFrameOps(4)}
        className={repFrameOps === 4 ? "targeted" : "untargeted"}
      >
        <h5>Frame Options</h5>
      </div>
      <div
        onClick={(e) => setRepFrameOps(5)}
        className={repFrameOps === 5 ? "targeted" : "untargeted"}
      >
        <h5>Frame Options</h5>
      </div>
    </Wrapper>
  );
};
export default BrakesOptions;
