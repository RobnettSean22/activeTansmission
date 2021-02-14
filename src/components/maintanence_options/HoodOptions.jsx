import React from "react";
import { OptionWrapper } from "../styled/options";
const HoodOptions = ({ mainUthOps, setMainUthOps }) => {
  return (
    <OptionWrapper>
      <div
        onClick={(e) => setMainUthOps(1)}
        className={mainUthOps === 1 ? "targeted" : "untargeted"}
      >
        <h5>Tire Options</h5>
      </div>
      <div
        onClick={(e) => setMainUthOps(2)}
        className={mainUthOps === 2 ? "targeted" : "untargeted"}
      >
        <h5>Tire Options</h5>
      </div>
      <div
        onClick={(e) => setMainUthOps(3)}
        className={mainUthOps === 3 ? "targeted" : "untargeted"}
      >
        <h5>Tire Options</h5>
      </div>
      <div
        onClick={(e) => setMainUthOps(4)}
        className={mainUthOps === 4 ? "targeted" : "untargeted"}
      >
        <h5>Tire Options</h5>
      </div>
      <div
        onClick={(e) => setMainUthOps(5)}
        className={mainUthOps === 5 ? "targeted" : "untargeted"}
      >
        <h5>Tire Options</h5>
      </div>
    </OptionWrapper>
  );
};
export default HoodOptions;
