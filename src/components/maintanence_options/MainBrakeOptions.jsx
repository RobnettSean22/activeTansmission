import React from "react";
import styled from "styled-components";
import "../css_sheets/options.scss";

const Wrapper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  background: yellow;
  justify-content: space-evenly;
  align-items: center;
`;

const MainBrakeOptions = ({ mainFrameOps, setMainFrameOps }) => {
  return (
    <Wrapper>
      <div
        onClick={(e) => setMainFrameOps(1)}
        className={mainFrameOps === 1 ? "targeted" : "untargeted"}
      >
        <h5>Frame Options</h5>
      </div>
      <div
        onClick={(e) => setMainFrameOps(2)}
        className={mainFrameOps === 2 ? "targeted" : "untargeted"}
      >
        <h5>Frame Options</h5>
      </div>
      <div
        onClick={(e) => setMainFrameOps(3)}
        className={mainFrameOps === 3 ? "targeted" : "untargeted"}
      >
        <h5>Frame Options</h5>
      </div>
      <div
        onClick={(e) => setMainFrameOps(4)}
        className={mainFrameOps === 4 ? "targeted" : "untargeted"}
      >
        <h5>Frame Options</h5>
      </div>
      <div
        onClick={(e) => setMainFrameOps(5)}
        className={mainFrameOps === 5 ? "targeted" : "untargeted"}
      >
        <h5>Frame Options</h5>
      </div>
    </Wrapper>
  );
};
export default MainBrakeOptions;
