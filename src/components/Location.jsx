import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import ShopImage from "../assets/active_shop1.jpg";
import GoogleMaps from "./GoogleMaps";

const Wrapper = styled.div``;

const LocationDescription = styled.div`
  width: 1292px;
  height: 966px;
  margin: 46px 37px 66px 37px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  img {
    width: 250px;
    height: 250px;
    border-radius: 0 0 19px 19px;
  }
`;
const Title = styled.div`
  width: 100%;
  height: 152px;
  background: rgb(253, 232, 1);
  border-radius: 19px 19px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h1 {
    font-size: 67px;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    margin: 4px 0 0 0;
    color: rgb(36, 39, 140);
  }

  h2 {
    font-size: 43px;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    margin: 4px 0 0 0;
    color: rgb(36, 39, 140);
  }
`;
const LocationInfo = styled.div`
  width: 1345px;
  height: 547px;
  margin: 0 11px 19px 11px;
  border-radius: 32px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #464996;
`;
const Border = styled.div`
  width: 8px;
  height: 99.9%;
  margin-left: 72px;
  background: #ffffff;
`;
const HoursLocation = styled.div`
  width: 415px;
  height: 516px;
  margin-left: 58px;

  h3 {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 35px;
    margin-bottom: 21px;
    color: rgb(253, 232, 1);
  }

  ul {
    li {
      list-style: none;
      font-family: "Montserrat", sans-serif;
      font-style: italic;
      font-weight: 500;
      font-size: 24px;
      margin-bottom: 21px;
      color: rgb(247, 247, 247);
    }
  }
`;

const Location = (props) => {
  return (
    <Wrapper>
      <Header />
      <LocationDescription>
        <Title>
          <h1>Active Transmission and Gear</h1>
          <h2>In Broomfield</h2>
        </Title>
        <img src={ShopImage} alt='shop' />
      </LocationDescription>
      <LocationInfo>
        <Border></Border>
        <HoursLocation>
          <div>
            <h3>Hours:</h3>
          </div>
          <ul>
            <li>Monday - Friday: 7am - 5:30pm</li>
            <li>Saturday: 8am -1 2 noon</li>
            <li>Sunday: Closed</li>
          </ul>
          <h3>Phone:</h3>
          <ul>
            <li>1+ 303-466-1133</li>
          </ul>
          <h3>Location:</h3>
          <ul>
            <li>7223 W 118th Pl unit a</li>
          </ul>
        </HoursLocation>
        <GoogleMaps />
      </LocationInfo>
      <Footer />
    </Wrapper>
  );
};
export default Location;
