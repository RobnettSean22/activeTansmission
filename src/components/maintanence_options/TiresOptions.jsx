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

const TireOptions = ({ mainTireOps, setMainTireOps }) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};
export default TireOptions;
