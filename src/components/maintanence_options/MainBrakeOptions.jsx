import React from "react";
import { OptionWrapper } from "../styled/options";
const MainBrakeOptions = ({ mainFrameOps, setMainFrameOps }) => {
  return (
    <OptionWrapper>
      {/*navigation method for brake maintenance services*/}
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
    </OptionWrapper>
  );
};
export default MainBrakeOptions;
