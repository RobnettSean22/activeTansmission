import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: none;
  @media ${(props) => props.theme.mediaQueries.media576} {
    display: block;
    width: 100%;
    height: 561px;
    background: #f7ee88;
    text-align: center;
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
