import React, { useState } from "react";

import Carousel from "./Carousel";
import styled from "styled-components";
import SecondaryNav from "./SecondaryNav";

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
const SecondNav = styled.div`
  width: 100%;
  height: 59px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(36, 39, 140, 0.91);
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

const Description = styled.div`
  width: 100%;
  height: 752px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const DescriptTitle = styled.div`
  width: 218px;
  height: 59px;
  margin-left: 160px;
  margin-bottom: 32px;
  h2 {
    margin: 0;
    font-size: 51px;
  }
`;

const Descript = styled.div`
  width: 1038px;
  height: 152px;
  margin-left: 169px;
  margin-bottom: 32px;
  p {
    font-size: 24px;
    line-height: 1.29;
  }
`;

const MoreInfo = styled.div`
  width: 927px;
  height: 227px;
  margin-left: 225px;
  ul {
    li {
      font-size: 23px;
      line-height: 1.65;
    }
  }
`;
const Repair = (props) => {
  const [repNav, setRepNav] = useState(2);
  const [repViewOptions, setRepViewOptions] = useState(1);

  return (
    <Wrapper>
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
          <Carousel setRepairOptions={setRepViewOptions} forRepair={repNav} />
        </NavCase>

        <SecondNav>
          <SecondaryNav repairOptions={repViewOptions} />
        </SecondNav>
      </Nav>
      <Description>
        <DescriptTitle>
          <h2>Re-build</h2>
        </DescriptTitle>
        <Descript>
          <p>
            One advanced diverted domestic sex repeated bringing you old.
            Possible procured her trifling laughter thoughts property she met
            way. Companions shy had solicitude favourable own. Which could saw
            guest man now heard but. Lasted my coming uneasy marked so should.
            Gravity letters it amongst herself dearest an windows by. Wooded
            ladies she basket season age her uneasy saw. Discourse unwilling am
            no described dejection incommode no listening of. Before nature his
            parish boy.
          </p>
        </Descript>
        <MoreInfo>
          <ul>
            <li>
              One advanced diverted domestic sex repeated bringing you old
            </li>
            <li>Possible procured her trifling laughter thoughts property </li>
            <li>
              Companions shy had solicitude favourable own. Which could saw
              guest man now{" "}
            </li>
            <li>
              Lasted my coming uneasy marked so should. Gravity letters it
              amongst herself dearest{" "}
            </li>
          </ul>
        </MoreInfo>
      </Description>
    </Wrapper>
  );
};
export default Repair;
