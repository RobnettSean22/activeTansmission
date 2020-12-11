import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Float from "./Float";
import BlueColor from "../assets/atg_home_bluecolar.jpg";

const Wrapper = styled.div`
  /* background: rgb(250, 250, 250); */
`;
const OpeningMessageContainer = styled.div`
  width: 1336px;
  height: 903px;
  display: flex;
  justify-content: flex-start;
  margin: 214px 0px 110px 52px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.87);
`;

const Promise = styled.div`
  width: 530px;
  height: 100%;
  background: rgb(253, 250, 1);

  h1 {
    font-family: "Lora", serif;
    font-size: 36px;
    font-style: italic;
    font-weight: 600;
    margin: 29px 0 31px 35px;
    color: rgb(36 39 140);
    -webkit-text-stroke: 1px rgb(227, 227, 227);
  }

  ul {
    margin: 31px 0 0 68px;
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
const Caption = styled.div`
  position: relative;
  width: 100%;
  height: 235px;
  bottom: 238.5px;
  background: rgb(28, 28, 28, 0.67);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h1 {
    color: rgb(227, 227, 227);
    -webkit-text-stroke: 1px rgb(36 39 140);
    font-size: 41px;
    font-family: "Lora", serif;
    font-style: italic;
    font-weight: 600;
    margin: 2px 0 0 0;
  }
  h2 {
    color: rgb(227, 227, 227);
    text-align: center;
    font-size: 22px;
    font-family: "Montserrat", sans-serif;

    font-weight: 500;
    margin: 31px 0 0 0;
  }
`;
const Landing = (props) => {
  return (
    <Wrapper>
      <Header />
      <Float />
      <OpeningMessageContainer>
        <Promise>
          <h1>We Tell The Truth</h1>
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
          <Caption>
            <h1>Active Transmission and Gear</h1>
            <h2>Monday - Friday 8am to 5:30pm</h2>
            <h2>
              7223 W 118th Pl unit a, Broomfield, <br /> CO 80020,United States
            </h2>
          </Caption>
        </LocationInfo>
      </OpeningMessageContainer>
      <Footer />
    </Wrapper>
  );
};
export default Landing;
