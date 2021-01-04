import React from "react";
import { Switch, Route } from "react-router";

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
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/aboutus/' component={AboutUs} />
        <Route exact path='/contact/' component={Contact} />
        <Route exact path='/repair/' component={Repair} />
        <Route exact path='/location/' component={Location} />
      </Switch>
    </Wrap>
  );
};

export default App;
