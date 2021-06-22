import React from "react";
import { OptionWrapper } from "../styled/options";
const TireOptions = ({ mainTireOps, setMainTireOps }) => {
  return (
    <OptionWrapper>
      {/*navigation method for tire maintenance services*/}
      <div
        onClick={(e) => setMainTireOps(1)}
        className={mainTireOps === 1 ? "targeted" : "untargeted"}
      >
        <h5>Under the Hood</h5>
      </div>
      <div
        onClick={(e) => setMainTireOps(2)}
        className={mainTireOps === 2 ? "targeted" : "untargeted"}
      >
        <h5>Under the Hood</h5>
      </div>
      <div
        onClick={(e) => setMainTireOps(3)}
        className={mainTireOps === 3 ? "targeted" : "untargeted"}
      >
        <h5>Under the Hood</h5>
      </div>
      <div
        onClick={(e) => setMainTireOps(4)}
        className={mainTireOps === 4 ? "targeted" : "untargeted"}
      >
        <h5>Under the Hood</h5>
      </div>
      <div
        onClick={(e) => setMainTireOps(5)}
        className={mainTireOps === 5 ? "targeted" : "untargeted"}
      >
        <h5>Under the Hood</h5>
      </div>
    </OptionWrapper>
  );
};
export default TireOptions;
