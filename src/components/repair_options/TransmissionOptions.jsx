import React from "react";
import { OptionWrapper } from "../styled/options";

const TransmissionOptions = ({ repUthOps, setRepUthOps }) => {
  return (
    <OptionWrapper>
      <div
        onClick={(e) => setRepUthOps(1)}
        className={repUthOps === 1 ? "targeted" : "untargeted"}
      >
        <h5>Transmission Options</h5>
      </div>
      <div
        onClick={(e) => setRepUthOps(2)}
        className={repUthOps === 2 ? "targeted" : "untargeted"}
      >
        <h5>Transmission Options</h5>
      </div>
      <div
        onClick={(e) => setRepUthOps(3)}
        className={repUthOps === 3 ? "targeted" : "untargeted"}
      >
        <h5>Transmission Options</h5>
      </div>
      <div
        onClick={(e) => setRepUthOps(4)}
        className={repUthOps === 4 ? "targeted" : "untargeted"}
      >
        <h5>Transmission Options</h5>
      </div>
      <div
        onClick={(e) => setRepUthOps(5)}
        className={repUthOps === 5 ? "targeted" : "untargeted"}
      >
        <h5>Transmission Options</h5>
      </div>
    </OptionWrapper>
  );
};
export default TransmissionOptions;
