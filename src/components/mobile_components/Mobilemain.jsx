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
const LinkTo = styled.button`
  width: 100%;
  height: 21px;
`;
const InfoContainer = styled.div`
  display: flex;

  justify-content: flex-start;
  width: 100%;
`;

const LinkToInformation = styled.div`
  width: 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const Mobilemain = ({
  forMobileMaintanence,
  setMobileMainOptions,
  mobileMainOptions,
}) => {
  return (
    <Wrapper>
      <WarrentyDisplay>
        <h3>Warrenty Offered</h3>
      </WarrentyDisplay>
      <PageTitle></PageTitle>
      <LinkTo></LinkTo>
      <InfoContainer>
        <Information />
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
