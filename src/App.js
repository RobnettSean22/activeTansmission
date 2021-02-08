import React from "react";
import { Switch, Route } from "react-router";
import styled from "styled-components";
import Mobileheader from "./components/mobile_components/Mobileheader";
import Landing from "./components/Landing";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Location from "./components/Location";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Wrap = styled.div`
  width: 100vw;

  overflow: hidden;
`;
const App = () => {
  return (
    <Wrap>
      <Header />
      <Mobileheader />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/aboutus/' component={AboutUs} />
        <Route exact path='/contact/' component={Contact} />
        <Route exact path='/services/' component={Services} />
        <Route exact path='/location/' component={Location} />
      </Switch>
      <Footer />
    </Wrap>
  );
};

export default App;
