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

const Mobilemain = ({
  forMobileMaintanence,
  setMobileMainOptions,
  mobileMainOptions,
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
            <h1>Maintenance</h1>
          </RepairTitle>
          <LeftLine />
        </Shadder>
      </PageTitle>

      <InfoContainer>
        <Carousel
          forMaintanence={forMobileMaintanence}
          setMainOptions={setMobileMainOptions}
          mainOptions={mobileMainOptions}
        />
      </InfoContainer>
    </Wrapper>
  );
};

export default Mobilemain;
