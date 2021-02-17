import React, { useState } from "react";
import Carousel from "./Carousel";
import SecondaryNav from "./SecondaryNav";
import Information from "./Information";
import Mobilemain from "./mobile_components/Mobilemain";
import {
  Nav,
  RepairTitleContainer,
  Shadder,
  LeftLine,
  RightLine,
  RepairTitle,
  NavCase,
  WarrantyInfo,
  Indicator,
  SecondNav,
  Wrapper,
} from "./styled/repairMain";

const Maintenance = (props) => {
  const [maiNav, setMaiNav] = useState(1);
  const [mainViewOptions, setMainViewOption] = useState(2);
  return (
    <Wrapper>
      <Nav>
        <RepairTitleContainer>
          <Shadder>
            <LeftLine />
            <RepairTitle>
              <h1>Maintenance</h1>
            </RepairTitle>
            <RightLine />
          </Shadder>
        </RepairTitleContainer>
        <NavCase>
          <WarrantyInfo>
            <h5>Warranty Offered</h5>
            <Indicator></Indicator>
          </WarrantyInfo>
          <Carousel
            forMaintanence={maiNav}
            setMainOptions={setMainViewOption}
            mainOptions={mainViewOptions}
          />
        </NavCase>

        <SecondNav>
          <SecondaryNav mainOptions={mainViewOptions} />
        </SecondNav>
      </Nav>
      <Mobilemain
        forMobileMaintanence={maiNav}
        setMobileMainOptions={setMainViewOption}
        mobileMainOptions={mainViewOptions}
      />
      <Information />
    </Wrapper>
  );
};
export default Maintenance;
