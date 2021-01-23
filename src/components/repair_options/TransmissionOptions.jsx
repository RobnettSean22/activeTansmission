import React from "react";

import "../css_sheets/options.scss";

const TransmissionOptions = ({ repUthOps, setRepUthOps }) => {
  return (
    <div className='wrapper'>
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
    </div>
  );
};
export default TransmissionOptions;
