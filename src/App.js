import React from "react";
import Header from "./components/Header";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100vw;

  background: blue;
`;
const App = () => {
  return (
    <Wrap>
      <Header />
    </Wrap>
  );
};

export default App;
