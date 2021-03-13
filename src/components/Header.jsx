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
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LinkDirectory = styled.div`
  width: 86%;
  height: 126.5px;

  border-bottom: 2px solid rgb(253, 232, 1);
  display: flex;

  justify-content: space-evenly;
  align-items: center;
  @media ${(props) => props.theme.mediaQueries.media850} {
  }

  @media ${(props) => props.theme.mediaQueries.media768} {
    margin: 38px 5% 0px 6%;
  }
`;
const SiteLinks = styled.ul`
  list-style: none;
  display: inline;
  padding: 0;
  width: 75%;
  & li {
    display: inline;
    font-size: 36px;
    font-family: "Lora", serif;
    font-weight: 700;
    padding-right: 3%;

    a {
      text-decoration: none;
      color: rgb(255, 255, 255);
    }
    img {
      width: 24%;
    }
  }
  @media ${(props) => props.theme.mediaQueries.media1365} {
    width: 80%;
    & li {
      font-size: 34px;
      padding-right: 2.3%;
      img {
        width: 24%;
        height: 25%;
      }
    }
  }
  @media ${(props) => props.theme.mediaQueries.media1230} {
    & li {
      font-size: 32px;
      padding-right: 2%;
      img {
        width: 25%;
      }
    }
  }
  @media ${(props) => props.theme.mediaQueries.media1170} {
    margin-bottom: 45px;
    width: 90%;
    & li {
      font-size: 30px;
      padding-right: 2%;

      img {
        width: 28%;
      }
    }
  }
  @media ${(props) => props.theme.mediaQueries.media998} {
    width: 95%;
    & li {
      font-size: 26px;
      padding-right: 3%;

      img {
        width: 26%;
      }
    }
  }
  @media ${(props) => props.theme.mediaQueries.media850} {
    margin-left: 1%;
    width: 99%;
    & li {
      font-size: 24px;

      padding-right: 3%;
      img {
        width: 27%;
        height: 29%;
      }
    }
  }
  @media ${(props) => props.theme.mediaQueries.media768} {
    margin-left: 1%;
    & li {
      font-size: 20px;
      padding-right: 3%;

      img {
        width: 27%;
      }
    }
  }
  @media ${(props) => props.theme.mediaQueries.media650} {
    & li {
      font-size: 17px;
      padding-right: 3%;

      img {
        width: 28%;
        height: 25%;
      }
    }
  } ;
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
