import React from "react";
import { OptionWrapper } from "../styled/options";

const BrakesOptions = ({ repFrameOps, setRepFrameOps }) => {
  return (
    <OptionWrapper>
      {/*navigation method for brake repair services*/}
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
    </OptionWrapper>
  );
};
export default BrakesOptions;
