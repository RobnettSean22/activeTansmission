import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Repair from "./Repair";
import Maintenance from "./Maintenance";

const Wrapper = styled.div``;
const SwitchLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(36, 39, 140, 0.91);
  height: 51px;
  h2 {
    font-size: 33px;
    margin-top: 5px;
    color: rgb(255, 255, 255);
    :hover {
      color: rgba(36, 39, 140, 0.91);
    }
  }
  @media screen and (max-width: 414px) {
    position: relative;
    top: 134px;
    height: 21px;

    h2 {
      font-size: 17px;
      margin: 0;
    }
  } ;
`;
const RepairLink = styled.div`
  width: 426px;
  height: 100%;
  text-align: center;
  :hover {
    background: rgb(247, 238, 136);
    cursor: pointer;
  }
`;
const MaintenanceLink = styled.div`
  width: 426px;
  height: 100%;
  text-align: center;
  :hover {
    background: rgb(247, 238, 136);
    cursor: pointer;
  }
`;
const Services = (props) => {
  const [repairListing, setRepairListing] = useState(2);

  return (
    <Wrapper>
      <SwitchLinkContainer>
        {repairListing === 1 ? (
          <MaintenanceLink onClick={(e) => setRepairListing(2)}>
            <h2>Maintenance</h2>
          </MaintenanceLink>
        ) : (
          <RepairLink onClick={(e) => setRepairListing(1)}>
            <h2>Repairs</h2>
          </RepairLink>
        )}
      </SwitchLinkContainer>
      {repairListing === 1 ? <Repair /> : <Maintenance />}
    </Wrapper>
  );
};

export default Services;
