import React from "react";
import Carousel from "../Carousel";
import {
  Wrapper,
  PageTitle,
  WarrentyDisplay,
  StatusIndicator,
  Shadder,
  RightLine,
  LeftLine,
  RepairTitle,
  InfoContainer,
} from "../styled/mobileMainRepair";

const Mobilerepair = ({
  setMobileRepairOptions,
  forMobileRepair,
  mobileRepairOptions,
}) => {
  return (
    <Wrapper>
      <WarrentyDisplay>
        <h3>Warrenty Offered</h3>
        <StatusIndicator />
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
