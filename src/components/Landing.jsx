import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import BlueColor from "../assets/atg_home_bluecolar.jpg";

const Wrapper = styled.div``;
const OpeningMessageContainer = styled.div`
  width: 1336px;
  height: 903px;
  display: flex;
  justify-content: flex-start;
  background: pink;
  margin: 214px 0px 110px 52px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.87);
`;

const Promise = styled.div`
  width: 530px;
  height: 100%;
  background: orange;

  h1 {
    font-family: Lora;
    font-size: 37px;
    font-style: italic;
  }

  ul {
  }
`;
const LocationInfo = styled.div`
  width: 806px;
  height: 100%;
  & img {
    width: 100%;
    height: 100%;
  }
`;
const Landing = (props) => {
  return (
    <Wrapper>
      <Header />
      <OpeningMessageContainer>
        <Promise>
          <div>
            <h1>We Tell The Truth</h1>
          </div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <h1>Reliable and Dependable</h1>
          <ul>
            {" "}
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <h1>Warrenties on Services</h1>
          <ul>
            {" "}
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </Promise>
        <LocationInfo>
          <img src={BlueColor} alt='shop image' />
        </LocationInfo>
      </OpeningMessageContainer>
      <Footer />
    </Wrapper>
  );
};
export default Landing;
