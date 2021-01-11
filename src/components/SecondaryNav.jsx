import React, { useState } from "react";
import styled from "styled-components";
import HoodOptions from "./maintanence_options/HoodOptions";
import TireOptions from "./maintanence_options/TiresOptions";
import MainBrakesOptions from "./maintanence_options/MainBrakeOptions";
import EngineOptions from "./repair_options/EngineOptions";
import BrakesOptions from "./repair_options/BrakesOptions";
import TransmissionOptions from "./repair_options/TransmissionOptions";

const Wrapper = styled.div``;
const SNCasing = styled.div`
  width: 846px;
  height: 118px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const SecondaryNav = ({ repairOptions, mainOptions }) => {
  const [options, setOptions] = useState(1);
  return (
    <Wrapper>
      {repairOptions ? (
        <SNCasing>
          {repairOptions === 1 ? (
            <EngineOptions repTireOps={options} setRepTireOps={setOptions} />
          ) : repairOptions === 2 ? (
            <TransmissionOptions
              repUthOps={options}
              setRepUthOps={setOptions}
            />
          ) : (
            <BrakesOptions RepFrameOps={options} setRepFrameOps={setOptions} />
          )}
        </SNCasing>
      ) : (
        <SNCasing>
          {mainOptions === 1 ? (
            <HoodOptions mainUthOps={options} setMainUthOps={setOptions} />
          ) : mainOptions === 2 ? (
            <TireOptions mainTireOps={options} setMainTireOps={setOptions} />
          ) : (
            <MainBrakesOptions
              mainFrameOps={options}
              setMainFrameOps={setOptions}
            />
          )}
        </SNCasing>
      )}
    </Wrapper>
  );
};
export default SecondaryNav;
