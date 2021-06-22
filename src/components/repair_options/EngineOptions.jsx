import React from "react";
import { OptionWrapper } from "../styled/options";
const EngineOptions = ({ repTireOps, setRepTireOps }) => {
  return (
    <OptionWrapper>
      {/*navigation method for engine maintenance services*/}
      <div
        onClick={(e) => setRepTireOps(1)}
        className={repTireOps === 1 ? "targeted" : "untargeted"}
      >
        <h5>Tire Options</h5>
      </div>
      <div
        onClick={(e) => setRepTireOps(2)}
        className={repTireOps === 2 ? "targeted" : "untargeted"}
      >
        <h5>Tire Options</h5>
      </div>
      <div
        onClick={(e) => setRepTireOps(3)}
        className={repTireOps === 3 ? "targeted" : "untargeted"}
      >
        <h5>Tire Options</h5>
      </div>
      <div
        onClick={(e) => setRepTireOps(4)}
        className={repTireOps === 4 ? "targeted" : "untargeted"}
      >
        <h5>Tire Options</h5>
      </div>
      <div
        onClick={(e) => setRepTireOps(5)}
        className={repTireOps === 5 ? "targeted" : "untargeted"}
      >
        <h5>Tire Options</h5>
      </div>
    </OptionWrapper>
  );
};
export default EngineOptions;
