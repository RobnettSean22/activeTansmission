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

const HoodOptions = ({ mainUthOps, setMainUthOps }) => {
  return (
    <Wrapper>
      <div className={1 ? "targeted" : "untargeted"}>
        <h5>Hood Options</h5>
      </div>
      <div className={1 ? "targeted" : "untargeted"}>
        <h5>Hood Options</h5>
      </div>
      <div className={1 ? "targeted" : "untargeted"}>
        <h5>Hood Options</h5>
      </div>
      <div className={1 ? "targeted" : "untargeted"}>
        <h5>Hood Options</h5>
      </div>
      <div className={1 ? "targeted" : "untargeted"}>
        <h5>Hood Options</h5>
      </div>
    </Wrapper>
  );
};
export default HoodOptions;
