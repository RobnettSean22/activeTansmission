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
const EmployeeInfo = styled.div`
  width: 100%;
  height: 1391px;
  background: orange;
`;
const AboutUs = (props) => {
  return (
    <Wrapper>
      <Header />
      <MissionContainer></MissionContainer>
      <EmployeeInfo></EmployeeInfo>
      <Footer />
    </Wrapper>
  );
};

export default AboutUs;
