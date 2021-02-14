import React from "react";
import styled from "styled-components";
import Carousel from "../Carousel";

import Tranny from "../../assets/active_new_trany.jpg";
const Wrapper = styled.div`
  display: none;

  @media ${(props) => props.theme.mediaQueries.media576} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 414px;
  }
`;
const WarrentyDisplay = styled.div`
  width: 100%;
  height: 51px;
  display: flex;
  align-items: flex-end;

  h3 {
    font-size: 10px;
    margin-bottom: 12px;
  }
`;
const StatusIndicator = styled.div`
  width: 8px;
  height: 7.6px;
  border-radius: 50%;
  background: #51f74a;
  margin-left: 8px;
  margin-bottom: 15px;
`;
const PageTitle = styled.div`
  width: 100%;
  height: 62px;
  background-repeat: no-repeat;
  background-size: 2000px 465px;
  background-position: 80% 42%;
  background-image: url(${Tranny});
`;

const Shadder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(50, 65, 108, 0.32);
`;
const RightLine = styled.hr`
  width: 97px;
  position: relative;
  right: 0;
  border: 1px solid rgb(253, 232, 1);
`;
const LeftLine = styled.hr`
  width: 97px;
  position: relative;
  left: 0;
  border: 1px solid rgb(253, 232, 1);
`;

const RepairTitle = styled.div`
  width: 220px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 2px rgb(253, 232, 1);
  background: rgb(50, 65, 108, 0.62);
  h1 {
    font-size: 30px;
    font-family: "Lora", serif;
    font-weight: 700;
    color: rgb(247, 247, 247);
    margin: 0;
  }
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

const Mobilemain = ({
  forMobileMaintanence,
  setMobileMainOptions,
  mobileMainOptions,
}) => {
  return (
    <Wrapper>
      <WarrentyDisplay>
        <h3>Warrenty Offered</h3>
        <StatusIndicator></StatusIndicator>
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
      <LinkTo></LinkTo>
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
