import React from "react";
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
  return (
    <Wrapper>
      {repairOptions ? (
        <SNCasing>
          {repairOptions === 1 ? (
            <EngineOptions />
          ) : repairOptions === 2 ? (
            <TransmissionOptions />
          ) : (
            <BrakesOptions />
          )}
        </SNCasing>
      ) : (
        <SNCasing>
          {mainOptions === 1 ? (
            <HoodOptions />
          ) : mainOptions === 2 ? (
            <TireOptions />
          ) : (
            <MainBrakesOptions />
          )}
        </SNCasing>
      )}
    </Wrapper>
  );
};
export default SecondaryNav;
