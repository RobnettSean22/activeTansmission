import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const Wrapper = styled.div``;

const MissionContainer = styled.div`
  width: 100%;
  height: 647px;
  background: pink;
`;
const MissionTitle = styled.div`
  width: 100%;
  height: 161px;
`;
const MissionDescription = styled.div`
  width: 100%;
  height: 469px;
`;
const SectionBorder = styled.div`
  width: 100%;
  height: 47px;
`;
const EmployeeInfo = styled.div`
  width: 100%;
  height: 1391px;
  background: orange;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const EmployeeTitle = styled.div`
  width: 1030.2px;
  height: 161px;
  margin-bottom: 52px;
`;
const Employee = styled.div`
  width: 1030.2px;
  height: 235px;
  margin-bottom: 173px;
`;

const AboutUs = (props) => {
  return (
    <Wrapper>
      <Header />
      <MissionContainer>
        <MissionTitle></MissionTitle>
        <MissionDescription></MissionDescription>
        <SectionBorder></SectionBorder>
      </MissionContainer>
      <EmployeeInfo>
        <EmployeeTitle></EmployeeTitle>
        <Employee></Employee>
        <Employee></Employee>
        <Employee></Employee>
      </EmployeeInfo>
      <Footer />
    </Wrapper>
  );
};

export default AboutUs;
