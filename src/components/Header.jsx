import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HeaderImg from "../assets/atg_header.jpg";
import Logo from "../assets/activetransimission_logo.png";
import Stickynav from "./StickyNav";

const Wrapper = styled.header`
  width: 100%;
  height: 283px;
  background-image: url(${HeaderImg});
  background-size: 100% 337px;
  background-repeat: no-repeat;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.mediaQueries.media576} {
    display: none;
  }
`;

const LinksContainer = styled.div`
  width: 100%;
  height: 265px;
  background: rgb(80, 80, 80, 0.3);
`;
const LinkDirectory = styled.div`
  width: 86%;
  height: 126.5px;
  margin: 38px 132px 0px 132px;
  border-bottom: 2px solid rgb(253, 232, 1);
  @media ${(props) => props.theme.mediaQueries.media850} {
  }

  @media ${(props) => props.theme.mediaQueries.media768} {
    margin: 38px 5% 0px 6%;
  }
`;
const SiteLinks = styled.ul`
  list-style: none;
  margin: 0 80.5px 0 80.5px;
  padding: 0;
  & li {
    display: inline;
    font-size: 32.6px;
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
  @media ${(props) => props.theme.mediaQueries.media1365} {
    & li {
      padding-right: 5%;

      img {
        width: 20%;
        height: 25%;
      }
    }
  }
  @media ${(props) => props.theme.mediaQueries.media1230} {
    & li {
      padding-right: 4%;
    }
  }
  @media ${(props) => props.theme.mediaQueries.media1170} {
    & li {
      font-size: 27px;
      padding-right: 4%;
    }
  }
  @media ${(props) => props.theme.mediaQueries.media998} {
    & li {
      font-size: 22.5px;
      padding-right: 3%;
      img {
        width: 23%;
        height: 28%;
      }
    }
  }
  @media ${(props) => props.theme.mediaQueries.media850} {
    & li {
      font-size: 21px;
      padding-right: 3%;
      img {
        width: 24%;
        height: 29%;
      }
    }
  }
  @media ${(props) => props.theme.mediaQueries.media768} {
    margin: 0 0 0 5%;
    & li {
      font-size: 23px;
      padding-right: 2%;

      img {
        width: 145px;
        height: 87.3px;
      }
    }
  }
`;
const LastLink = styled.li`
  padding: 0 !important;
`;
const Header = (props) => {
  return (
    <Wrapper>
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
      <Stickynav />
    </Wrapper>
  );
};

export default Header;
