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

const TireOptions = ({ repUthOps, setRepUthOps }) => {
  return (
    <Wrapper>
      <div
        onClick={(e) => setRepUthOps(1)}
        className={repUthOps === 1 ? "targeted" : "untargeted"}
      >
        <h5>Under the Hood</h5>
      </div>
      <div
        onClick={(e) => setRepUthOps(2)}
        className={repUthOps === 2 ? "targeted" : "untargeted"}
      >
        <h5>Under the Hood</h5>
      </div>
      <div
        onClick={(e) => setRepUthOps(3)}
        className={repUthOps === 3 ? "targeted" : "untargeted"}
      >
        <h5>Under the Hood</h5>
      </div>
      <div
        onClick={(e) => setRepUthOps(4)}
        className={repUthOps === 4 ? "targeted" : "untargeted"}
      >
        <h5>Under the Hood</h5>
      </div>
      <div
        onClick={(e) => setRepUthOps(5)}
        className={repUthOps === 5 ? "targeted" : "untargeted"}
      >
        <h5>Under the Hood</h5>
      </div>
    </Wrapper>
  );
};
export default TireOptions;
