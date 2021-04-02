import React from "react";
import styled from "styled-components";
import Logo from "../../assets/activetransimission_logo.png";
const Wrapper = styled.div`
  display: none;
  @media ${(props) => props.theme.mediaQueries.media576} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 131px;
    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-size: 615px 336px;
    background-position: center;
  }
`;

const TitleContainer = styled.div`
  height: 100%;
  width: 141px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    margin: 0;
  }
`;
const Title = styled.div`
  width: 100%;
  height: ;
`;

const Hours = styled.div`
  height: 55px;
  width: 414px;
  background: pink;
  h3 {
    margin: 0;
  }
`;

const Divider = styled.div`
  width: 414px;
  height: 14px;
  background: #24278c;
`;

const Mobilelandinglocation = (props) => {
  return (
    <Wrapper>
      <TitleContainer>
        <Title>
          {" "}
          <h2>Active Transmission and Gear</h2>
        </Title>

        <Hours>
          <h3>Monday-Friday 8 to 5:30</h3>
          <h3>7223 W 118th Pl unit a, Broomfield, CO 80020,United States</h3>
        </Hours>
      </TitleContainer>

      <Divider />
    </Wrapper>
  );
};
export default Mobilelandinglocation;
