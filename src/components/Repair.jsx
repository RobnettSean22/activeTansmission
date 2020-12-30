import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Carousel";
import styled from "styled-components";
import Engine from "../assets/atg_engine_vect_white.png";
import Tranny from "../assets/active_new_trany.jpg";

const Wrapper = styled.div``;

const Nav = styled.div`
  width: 100%;
  height: 654px;
  margin: 0px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const RepairTitleContainer = styled.div`
  width: 100%;
  height: 174px;
  background-repeat: no-repeat;
  background-size: 2000px 465px;
  background-position: 50% 43%;
  background-image: url(${Tranny});
`;
const Shadder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(50, 65, 108, 0.32);
`;
const LeftLine = styled.hr`
  width: 475px;
  position: relative;
  left: 0;
  border: 1px solid rgb(253, 232, 1);
`;
const RightLine = styled.hr`
  width: 475px;
  position: relative;
  right: 0;
  border: 1px solid rgb(253, 232, 1);
`;
const RepairTitle = styled.div`
  width: 486px;
  height: 73px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 2px rgb(253, 232, 1);
  background: rgb(50, 65, 108, 0.62);
  h1 {
    font-size: 60px;
    font-family: "Lora", serif;
    font-weight: 700;
    color: rgb(247, 247, 247);
    margin: 0;
  }
`;
const NavCase = styled.div`
  width: 100%;
  height: 355px;
  background: rgba(50, 65, 108, 0.25);
`;
const WarrantyInfo = styled.div`
  width: 223px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 9px 0 0 9px;
  h5 {
    font-size: 18px;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    margin: 0;
  }
`;
const Indicator = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #51f74a;
  border: solid 1px #363995;
  margin-left: 23px;
`;
const SecondaryNav = styled.div`
  width: 100%;
  height: 59px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(36, 39, 140, 0.91);
`;
const SNCasing = styled.div`
  width: 846px;
  height: 118px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Capsule = styled.div`
  background: pink;
  width: 130px;
  height: 118px;
`;
const NotFocused = styled.div`
  width: 87px;
  height: 87px;
  border-radius: 50%;
  background: rgb(47, 46, 46);
  z-index: 1;
  margin: 0 auto;
`;
const Focused = styled.div`
  width: 112px;
  height: 112px;
  border-radius: 50%;
  background: rgb(47, 46, 46);
  z-index: 1;
  margin: 0 auto;
`;

const Description = styled.div`
  width: 100%;
  height: 752px;
  background: red;
`;
const Repair = (props) => {
  return (
    <Wrapper>
      <Header />

      <Nav>
        <RepairTitleContainer>
          <Shadder>
            <LeftLine />
            <RepairTitle>
              <h1>Reparis</h1>
            </RepairTitle>
            <RightLine />
          </Shadder>
        </RepairTitleContainer>
        <NavCase>
          <WarrantyInfo>
            <h5>Warranty Offered</h5>
            <Indicator></Indicator>
          </WarrantyInfo>
          <Carousel />
        </NavCase>

        <SecondaryNav>
          <SNCasing>
            <Capsule>
              <NotFocused></NotFocused>
            </Capsule>
            <Capsule>
              <NotFocused></NotFocused>
            </Capsule>
            <Capsule>
              <Focused></Focused>
            </Capsule>
            <Capsule>
              <NotFocused></NotFocused>
            </Capsule>
            <Capsule>
              <NotFocused></NotFocused>
            </Capsule>
          </SNCasing>
        </SecondaryNav>
      </Nav>
      <Description></Description>
      <Footer />
    </Wrapper>
  );
};
export default Repair;
