import React from "react";
import styled from "styled-components";
import Carousel from "../Carousel";
import Information from "../Information";
import {
  Wrapper,
  PageTitle,
  WarrentyDisplay,
  StatusIndicator,
  Shadder,
  RightLine,
  LeftLine,
} from "../styled/mobileMainRepair";

const RepairTitle = styled.div`
  width: 382px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 2px rgb(253, 232, 1);
  background: rgb(50, 65, 108, 0.62);
  h1 {
    font-size: 2.4rem;
    font-family: "Lora", serif;
    font-weight: 700;
    color: rgb(247, 247, 247);
    margin: 0;
  }
`;
const InfoContainer = styled.div`
  display: flex;

  justify-content: flex-start;
  width: 100%;
`;

const Mobilerepair = ({
  setMobileRepairOptions,
  forMobileRepair,
  mobileRepairOptions,
}) => {
  return (
    <Wrapper>
      <WarrentyDisplay>
        <h3>Warrenty Offered</h3>
      </WarrentyDisplay>
      <PageTitle>
        <Shadder>
          <RightLine />
          <RepairTitle>
            <h1>Repairs</h1>
          </RepairTitle>
          <LeftLine />
        </Shadder>
      </PageTitle>

      <InfoContainer>
        <Information />

        <Carousel
          setRepairOptions={setMobileRepairOptions}
          forRepair={forMobileRepair}
          repairOptions={mobileRepairOptions}
        />
      </InfoContainer>
    </Wrapper>
  );
};
export default Mobilerepair;
