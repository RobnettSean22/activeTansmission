import React from "react";

import styled from "styled-components";
import Landing from "./components/Landing";
import AboutUs from "./components/AboutUs";

const Wrap = styled.div`
  width: 100vw;

  overflow: hidden;
`;
const App = () => {
  return (
    <Wrap>
      <AboutUs />
    </Wrap>
  );
};

export default App;
