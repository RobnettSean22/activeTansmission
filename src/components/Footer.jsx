import React from "react";
import styled from "styled-components";
import Logo from "../assets/activetransimission_logo.png";

const FootWrap = styled.footer`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  background: rgb(65, 64, 64);
  @media screen and (max-width: 414px) {
    height: 148px;
  }
`;

const AdressRightsContainer = styled.div`
  width: 100%;
  height: 103px;
  display: flex;
  justify-content: space-between;
`;
const AdressContainer = styled.div`
  display: inline-block;
  height: 100%;
  & h5 {
    color: rgb(245, 245, 245);
  }
`;

const Hours = styled.h5`
  margin: 7px 13px 14px 0;
  @media screen and (max-width: 414px) {
    font-size: 9px;
  }
`;

const Location = styled.h5`
  margin: 0 13px 7px 0;
  @media screen and (max-width: 414px) {
    font-size: 9px;
  }
`;

const RightsContainer = styled.div`
  display: inline-block;
  height: 100%;
  & h5 {
    color: rgb(245, 245, 245);
    position: relative;
    bottom: -50px;
    left: 13px;
  }
  @media screen and (max-width: 414px) {
    h5 {
      font-size: 9px;
    }
  }
`;

const LogoContainer = styled.div`
  width: 100%;
  height: 197px;
`;

const Streak = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  align-items: center;

  margin-top: 83px;
  background: rgb(36, 39, 140);
  & img {
    width: 168px;
    height: 92px;
    position: relative;
    margin-left: 30px;
  }
  @media screen and (max-width: 414px) {
    height: 14px;
    margin-top: 32px;
    img {
      width: 92px;
      height: 50px;
      margin-left: 8px;
    }
  }
`;
const Footer = (props) => {
  return (
    <FootWrap>
      <LogoContainer>
        <Streak>
          <img src={Logo} alt='company logo' />
        </Streak>
      </LogoContainer>
      <AdressRightsContainer>
        <RightsContainer>
          <h5>All rights reserved for Active Transmission and Gear</h5>
        </RightsContainer>
        <AdressContainer>
          <Hours>Mon - Fri: 8 am to 5:30 pm </Hours>
          <Location>
            7223 W 118th Pl unit a, Broomfield,
            <br /> CO 80020,United States
          </Location>
        </AdressContainer>
      </AdressRightsContainer>
    </FootWrap>
  );
};

export default Footer;
