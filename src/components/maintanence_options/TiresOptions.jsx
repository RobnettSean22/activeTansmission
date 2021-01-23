import React from "react";

import "../css_sheets/options.scss";

const TireOptions = ({ mainTireOps, setMainTireOps }) => {
  return (
    <div className='wrapper'>
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
    </div>
  );
};
export default TireOptions;
