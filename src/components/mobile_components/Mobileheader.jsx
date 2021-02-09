import React from "react";
import styled from "styled-components";
import Logo from "../../assets/activetransimission_logo.png";
import NavMenu from "../../assets/menu_icon.png";

const Wrapper = styled.header`
  display: none;
  @media screen and (max-width: 414px) {
    display: flex;
    justify-content: space-between;
    width: 414px;
    height: 43px;
    background: #242784;
  }
`;

const Mobileheader = (props) => {
  return (
    <Wrapper>
      <img src={Logo} alt='active logo' />
      <img src={NavMenu} alt='nav icon' />
    </Wrapper>
  );
};

export default Mobileheader;
