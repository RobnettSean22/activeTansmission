import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: none;
  @media screen and (max-width: 414px) {
    display: block;
    width: 414px;
    height: 561px;
    background: #f7ee88;
  }
`;
const Mobileopeningcontainer = (props) => {
  return (
    <Wrapper>
      <h2>We tell the Truth</h2>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <h2>Reliable and Dependable</h2>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <h2>Service Warrenties</h2>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </Wrapper>
  );
};

export default Mobileopeningcontainer;
