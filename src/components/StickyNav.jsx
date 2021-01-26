import React from "react";
import { keyframes } from "styled-components";
import styled from "styled-components";

const navFadeIn = keyframes`
0%{opacity:0}
100%{opacity:1}
`;

const NavWrapper = styled.div`
  width: 100%;
  height: 70px;
  background: blue;
  animation-name: ${navFadeIn};
  animation-duration: 1.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  position: fixed;
  top: 0;
  z-index: 2;
`;

const Stickynav = (props) => {
  return <NavWrapper></NavWrapper>;
};
export default Stickynav;
