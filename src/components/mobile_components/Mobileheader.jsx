import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../assets/activetransimission_logo.png";
import NavMenu from "../../assets/menu_icon.png";

const Wrapper = styled.header`
  display: none;
  @media ${(props) => props.theme.mediaQueries.media576} {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 53px;
    background: #242784;
  }
`;

const Navigate = styled.div`
  position: absolute;
  width: 100%;
  height: 712px;
  top: 43px;
  background: grey;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  div {
    width: 100%;
    height: 25px;
    text-align: center;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
  }
`;

const AboutLink = styled.div``;
const ServicesLink = styled.div``;
const LocationLink = styled.div``;
const ContactLink = styled.div``;

const Mobileheader = (props) => {
  const [navVisible, setNavVisible] = useState(false);
  return (
    <Wrapper>
      <img src={Logo} alt='active logo' />
      <img src={NavMenu} alt='nav icon' />

      {/* <Navigate>
        <AboutLink></AboutLink>
        <ServicesLink></ServicesLink>
        <LocationLink></LocationLink>
        <ContactLink></ContactLink>
      </Navigate> */}
    </Wrapper>
  );
};

export default Mobileheader;
