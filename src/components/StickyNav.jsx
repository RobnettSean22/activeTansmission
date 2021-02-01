import React, { useState, useEffect } from "react";
import { keyframes } from "styled-components";
import "../components/css_sheets/navbar.scss";

const Stickynav = (props) => {
  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }
  return <div></div>;
};
export default Stickynav;
