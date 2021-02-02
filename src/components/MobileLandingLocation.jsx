import Mobileopeningcontainer from "./MobileOpeningContainer";

import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 414px;
  height: 131px;
`;

const Title = styled.div``;

const Hours = styled.div``;

const Mobilelandinglocation = (props) => {
  return (
    <Wrapper>
      <Title>
        {" "}
        <h2>Active Transmission and Gear</h2>
      </Title>

      <Hours>
        <h3>Monday-Friday 8 to 5:30</h3>
      </Hours>
      <div>
        <h3>7223 W 118th Pl unit a, Broomfield, CO 80020,United States</h3>
      </div>
      <div></div>
    </Wrapper>
  );
};
export default Mobilelandinglocation;
