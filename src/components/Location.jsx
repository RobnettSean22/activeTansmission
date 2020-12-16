import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Wrapper = styled.div``;

const LocationDescription = styled.div`
  width: 1292px;
  height: 966px;
  margin: 46px 37px 66px 37px;
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
const GoogleMap = styled.div`
  width: 624px;
  height: 516px;
`;
const Location = (props) => {
  // Initialize and add the map
  function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  return (
    <Wrapper>
      <Header />
      <LocationDescription></LocationDescription>
      <LocationInfo>
        <Border></Border>
        <HoursLocation>
          <div>
            <h3>Hours:</h3>
          </div>
          <ul>
            <li>Monday - Friday: 7am - 530pm</li>
            <li>Saturday: 8am-12 noon</li>
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
        <GoogleMap></GoogleMap>
      </LocationInfo>
      <Footer />
    </Wrapper>
  );
};
export default Location;
