import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Float from "./Float";
import styled from "styled-components";
import Engine from "../assets/atg_engine_vect_white.png";

const Wrapper = styled.div``;
const Repair = (props) => {
  return (
    <>
      <Header />
      <Float />
      <Footer />
    </>
  );
};
export default Repair;
