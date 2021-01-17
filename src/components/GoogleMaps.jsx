import React, { useLayoutEffect } from "react";

const GoogleMaps = (props) => {
  const { REACT_APP_MAP_KEY } = process.env;
  useLayoutEffect(() => {
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
    const mapId = document.getElementById("map");
    const map = new window.google.maps.Map(mapId, {
      options: {
        center: { lat: 39.91157, lng: -105.07813 },
        zoom: 15,
      },
    });
  };
  return (
    <div
      id='map'
      style={{
        background: "blue",
        height: "516px",
        width: "624px",
      }}
    />
  );
};
export default GoogleMaps;
