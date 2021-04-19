// import React, { useState } from "react";
// import styled from "styled-components";
// import { NavLink, Link } from "react-router-dom";
// import Logo from "../../assets/activetransimission_logo.png";
// import NavMenu from "../../assets/menu_icon.png";

// const Wrapper = styled.header`
//   display: none;
//   @media ${(props) => props.theme.mediaQueries.media576} {
//     display: flex;
//     justify-content: space-between;
//     width: 100%;
//     height: 53px;
//     background: #242784;
//   }
// `;

// const Navigate = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 712px;
//   top: 43px;
//   background: grey;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-evenly;
//   align-items: center;
//   div {
//     width: 100%;
//     height: 25px;
//     text-align: center;
//     border-top: 1px solid white;
//     border-bottom: 1px solid white;
//   }
// `;

// const AboutLink = styled.div``;
// const ServicesLink = styled.div``;
// const LocationLink = styled.div``;
// const ContactLink = styled.div``;

// const Mobileheader = (props) => {
//   const [navVisible, setNavVisible] = useState(false);
//   return (
//     <Wrapper>
//       <img src={Logo} alt='active logo' />
//       <img src={NavMenu} alt='nav icon' />

//       {/* <Navigate>
//         <AboutLink></AboutLink>
//         <ServicesLink></ServicesLink>
//         <LocationLink></LocationLink>
//         <ContactLink></ContactLink>
//       </Navigate> */}
//     </Wrapper>
//   );
// };

// import { BurgerIcon } from './'

import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import NavMenu from "../../assets/menu_icon.png";
import Logo from "../../assets/activetransimission_logo.png";

// import { BurgerIcon } from './'
import styled from "styled-components";

const Navigation = styled.header`
  display: none;
  @media ${(props) => props.theme.mediaQueries.media576} {
    width: 100%;
    border-bottom: 10px solid #222;
    z-index: 1;
    height: auto;
    min-height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-bottom: 0;
    padding: 0px;
    background: #24278c;
    .logo {
      width: 100%;
      height: 17px;
      display: block;
      padding-top: 20px;
      margin: 0px;
      margin-left: -5px;
      padding-left: 15px;
      padding-top: 0px !important;
    }
    img {
      display: inline-block;
      margin-top: 5px;
      height: 50px;
      width: 100px;
      float: left;
    }
    .gray {
      color: #ccc;
    }

    a {
      color: #222;
      opacity: 0.55;
      transition: all 0.6s;
      color: #222;
      font-size: 1em;
      padding: 0;
    }
    a:hover {
      opacity: 1;
    }
    .fa-bars {
      display: inline-block;
      position: absolute;
      color: #222;
      top: 3px;
      right: -8px;
      cursor: pointer;
      width: 70px;
      height: 54px;
      font-size: 2rem;
    }
    nav {
      align-self: flex-start;
      margin-top: 15px;
      ul {
        display: flex;
        justify-content: space-between;
      }
      li {
        margin: 0 15px;
        justify-content: space-between;
        font-size: 1em;
      }
      a {
        font-size: 1em;
        text-decoration: none;
        .active {
          color: tomato;
        }
      }
      a.active {
        color: #222;
      }
    }
    ul.collapsed {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;

      overflow: hidden;
      max-height: 0;
      -moz-transition-duration: 0.4s;
      -webkit-transition-duration: 0.4s;
      -o-transition-duration: 0.4s;
      transition-duration: 0.4s;
      -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

      &.is-expanded {
        overflow: hidden;
        max-height: 500px; /* approximate max height */
        -moz-transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s;
        -o-transition-duration: 0.4s;
        transition-duration: 0.4s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
      }
      li {
        padding: 15px 10px;
        margin: 0px 0px;
        width: 100%;
      }
    }
  }
`;

class Mobileheader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }
  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  }
  render() {
    const { isExpanded } = this.state;

    return (
      <Navigation>
        <div className='logo'>
          <Link to='/'>
            <img
              src={NavMenu}
              className='fa fa-bars'
              aria-hidden='true'
              onClick={(e) => this.handleToggle(e)}
            />
            <em>
              <div className='letterhead'>
                <img
                  src={Logo}
                  alt='ATG logo'
                  styled={{ height: "100px", width: "100px" }}
                />
                {/* <span className='name'>kentorry</span>
                <span className='gray'>.io</span> */}
              </div>
            </em>
          </Link>
        </div>

        <nav className='nav'>
          <i />
          <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
            <NavLink activeClassName='active' to='/'>
              <li>Home</li>
            </NavLink>
            <NavLink activeClassName='active' to='/aboutus'>
              <li>About</li>
            </NavLink>
            <NavLink activeClassName='active' to='/services'>
              <li>Services</li>
            </NavLink>
            <NavLink activeClassName='active' to='/contact'>
              <li>Contact</li>
            </NavLink>
            <NavLink activeClassName='active' to='/location'>
              <li>Location</li>
            </NavLink>
          </ul>
        </nav>
      </Navigation>
    );
  }
}

// export default Nav;

export default Mobileheader;
