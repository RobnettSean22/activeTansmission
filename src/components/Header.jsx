import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HeaderImg from "../assets/atg_header.jpg";
import Logo from "../assets/activetransimission_logo.png";

const Wrapper = styled.header`
  width: 100%;
  height: 350px;
  background-image: url(${HeaderImg});
  background-size: 100% 337px;
  background-repeat: no-repeat;
`;
const WrapperBorder = styled.div`
  width: 100%;
  height: 23px;
  background: rgb(36, 39, 140);
`;

const LinksContainer = styled.div`
  width: 100%;
  height: 314px;
  background: rgb(80, 80, 80, 0.3);
`;
const LinkDirectory = styled.div`
  width: 1176px;
  height: 126.5px;
  margin: 0 auto;
  border-bottom: 2px solid rgb(253, 232, 1);
`;
const SiteLinks = styled.ul`
  list-style: none;
  margin: 0 80.5px 0 80.5px;
  padding: 0;
  & li {
    display: inline;
    font-size: 32.7px;
    font-family: "Lora", serif;
    font-weight: 700;

    padding-right: 72px;
    a {
      text-decoration: none;
      color: rgb(255, 255, 255);
    }
    img {
      width: 187px;
      height: 102.3px;
    }
  }
`;
const LastLink = styled.li`
  padding: 0 !important;
`;
const Header = (props) => {
  return (
    <Wrapper>
      <WrapperBorder></WrapperBorder>
      <LinksContainer>
        <LinkDirectory>
          <SiteLinks>
            <li>
              <Link exact to='/aboutus/'>
                About Us
              </Link>
            </li>
            <li>
              <Link exact to='/services/'>
                Services
              </Link>
            </li>
            <li>
              {" "}
              <Link exact to='/'>
                <img src={Logo} alt='company Logo' />
              </Link>
            </li>
            <li>
              <Link exact to='/location/'>
                Location
              </Link>
            </li>
            <LastLink>
              <Link exact to='/contact/'>
                Contact
              </Link>
            </LastLink>
          </SiteLinks>
        </LinkDirectory>
      </LinksContainer>
    </Wrapper>
  );
};

export default Header;
