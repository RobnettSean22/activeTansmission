import React, { useLayoutEffect } from "react";
import styled from "styled-components";

const TheMap = styled.div`
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.9);
  margin-left: 142px;
  border-radius: 15px;
  height: 516px;
  width: 624px;
  background: pink;
  @media screen and (max-width: 414px) {
    width: 410px;
    height: 223px;
    margin-left: 0;
    margin-top: 10px;
    border-radius: 15px 15px 0 0;
  }
`;

const GoogleMaps = (props) => {
  useLayoutEffect(() => {
    const { REACT_APP_MAP_KEY } = process.env;
    if (window.google) {
      window.initMap = onScriptLoad();
    }
    let googleScript = document.createElement("script");
    googleScript.type = "type/javascript";
    googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${REACT_APP_MAP_KEY}`;

    googleScript.defer = true;
    document.head.appendChild(googleScript);
    let pickUpTag = document.getElementsByTagName("script")[0];
    pickUpTag.parentNode.insertBefore(googleScript, pickUpTag);
    googleScript.addEventListener("load", (e) => {
      onScriptLoad();
    });
  }, []);

  const onScriptLoad = () => {
    const myLatLng = { lat: 39.91084, lng: -105.07783 };
    const mapId = document.getElementById("map");
    const map = new window.google.maps.Map(mapId, {
      options: {
        center: myLatLng,
        zoom: 17,
      },
    });
    new window.google.maps.Marker({
      position: myLatLng,
      map,
      title: "Active Transimission and Gear",
    });
  };
  return (
    <TheMap
      id='map'
      // style={{
      //   boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.9)",
      //   marginLeft: "142px",
      //   borderRadius: "15px",
      //   height: "516px",
      //   width: "624px",
      //   background: "pink",
      // }}
    />
  );
};
export default GoogleMaps;
