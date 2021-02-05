import React from "react";
import styled from "styled-components";
import Carousel from "../Carousel";
import Information from "../Information";

const Wrapper = styled.div`
  display: none;

  @media screen and (max-width: 414px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 414px;
    order: 4;
  }
`;
const WarrentyDisplay = styled.div`
  width: 100%;
  height: 51px;
`;
const PageTitle = styled.div`
  width: 100%;
  height: 62px;
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
      <PageTitle></PageTitle>

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
