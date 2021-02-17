import React, { useState } from "react";
import Carousel from "./Carousel";
import SecondaryNav from "./SecondaryNav";
import Information from "./Information";
import Mobilerepair from "./mobile_components/Mobilerepair";
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

const Repair = (props) => {
  const [repNav, setRepNav] = useState(2);
  const [repViewOptions, setRepViewOptions] = useState(2);

  return (
    <Wrapper>
      <Nav>
        <RepairTitleContainer>
          <Shadder>
            <LeftLine />
            <RepairTitle>
              <h1>Repairs</h1>
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
            setRepairOptions={setRepViewOptions}
            forRepair={repNav}
            repairOptions={repViewOptions}
          />
        </NavCase>

        <SecondNav>
          <SecondaryNav repairOptions={repViewOptions} />
        </SecondNav>
      </Nav>
      <Mobilerepair
        setMobileRepairOptions={setRepViewOptions}
        forMobileRepair={repNav}
        mobileRepairOptions={repViewOptions}
      />
      <Information />
    </Wrapper>
  );
};
export default Repair;
