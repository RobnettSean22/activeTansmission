import React from "react";
import styled from "styled-components";
import Carousel from "../Carousel";
import Information from "../Information";
import Tranny from "../../assets/active_new_trany.jpg";
const Wrapper = styled.div`
  display: none;

  @media ${(props) => props.theme.mediaQueries.media576} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
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
  background-repeat: no-repeat;
  background-size: 2000px 465px;
  background-position: 50% 43%;
  background-image: url(${Tranny});
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
