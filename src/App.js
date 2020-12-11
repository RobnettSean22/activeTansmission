import React from "react";

import styled from "styled-components";
import Landing from "./components/Landing";

const Wrap = styled.div`
  width: 100vw;

  overflow: hidden;
`;
const App = () => {
  return (
    <Wrap>
      <Landing />
    </Wrap>
  );
};

export default App;
