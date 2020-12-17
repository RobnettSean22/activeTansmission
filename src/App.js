import React from "react";

import styled from "styled-components";
import Landing from "./components/Landing";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Repair from "./components/Repair";
import Location from "./components/Location";

const Wrap = styled.div`
  width: 100vw;

  overflow: hidden;
`;
const App = () => {
  return (
    <Wrap>
      <Repair />
    </Wrap>
  );
};

export default App;
