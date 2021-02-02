import React from "react";
import styled from "styled-components";
import Logo from "../../assets/activetransimission_logo.png";
const Wrapper = styled.div`
  width: 414px;
  height: 131px;
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-size: 615px 336px;
  background-position: center;
`;

const TitleContainer = styled.div`
  height: 30px;
  width: 141px;
  h2 {
    margin: 0;
  }
`;

const Hours = styled.div`
  height: 55px;
  width: 414px;
`;

const Divider = styled.div`
  width: 414px;
  height: 14px;
  background: #24278c;
`;

const Promise = styled.div`
  height: 561px;
  width: 414px;
  background: #f7ee88;
`;

const Mobilelandinglocation = (props) => {
  return (
    <Wrapper>
      <TitleContainer>
        {" "}
        <h2>Active Transmission and Gear</h2>
      </TitleContainer>

      <Hours>
        <h3>Monday-Friday 8 to 5:30</h3>
        <h3>7223 W 118th Pl unit a, Broomfield, CO 80020,United States</h3>
      </Hours>

      <Divider></Divider>
      <Promise></Promise>
    </Wrapper>
  );
};
export default Mobilelandinglocation;
