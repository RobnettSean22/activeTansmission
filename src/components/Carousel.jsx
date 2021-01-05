import React from "react";
import styled from "styled-components";
import Engine from "../assets/atg_engine_vect_white.png";
import Tranny from "../assets/atg_trans_white.png";
import Brake from "../assets/atg_brake_vect_white.png";
import Hood from "../assets/atg_hood_white.png";
import Tire from "../assets/atg_tire_vect_white.png";

const Wrapper = styled.div`
  width: 500px;
  height: 100%;
`;
const CarouselCase = styled.div`
  width: 620px;
  height: 100%;
  position: relative;
  left: 413.5px;
  top: -31px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const EngineContain = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;
const TransmissionContain = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;
const BrakeContain = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;
const NavEngine = styled.div`
  width: 134px;
  height: 134px;
  border-radius: 50%;
  background: rgb(47, 46, 46);
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 116px;
    height: 116px;
  }
`;
const NavTranny = styled.div`
  width: 134px;
  height: 134px;
  border-radius: 50%;
  background: rgb(47, 46, 46);
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 148px;
    height: 136px;
    margin-bottom: 8px;
  }
`;
const NavBrake = styled.div`
  width: 134px;
  height: 134px;
  border-radius: 50%;
  background: rgb(47, 46, 46);
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 116px;
    height: 116px;
  }
`;
const HoodContain = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

const TiresContain = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;
const MainBrakeContain = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;
const NavHood = styled.div`
  width: 134px;
  height: 134px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(47, 46, 46);
  img {
    width: 166px;
    height: 166px;
  }
`;
const NavTires = styled.div`
  width: 134px;
  height: 134px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(47, 46, 46);
  img {
    width: 212px;
    height: 212px;
  }
`;
const NavMainBrake = styled.div`
  width: 134px;
  height: 134px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(47, 46, 46);
  img {
    width: 134px;
    height: 134px;
  }
`;

const Carousel = ({ forRepair, setRepairOptions, setMainOptions }) => {
  return (
    <Wrapper>
      {forRepair ? (
        <CarouselCase>
          <EngineContain>
            <NavEngine>
              <img
                onClick={(e) => setRepairOptions(1)}
                src={Engine}
                alt='engine png'
              />
            </NavEngine>
            <h2>Engine Work</h2>
          </EngineContain>
          <TransmissionContain>
            <NavTranny>
              <img
                onClick={(e) => setRepairOptions(2)}
                src={Tranny}
                alt='transmission png'
              />
            </NavTranny>
            <h2>Transmission</h2>
          </TransmissionContain>
          <BrakeContain>
            <NavBrake>
              <img
                onClick={(e) => setRepairOptions(3)}
                src={Brake}
                alt='brake png'
              />
            </NavBrake>
            <h2>Brakes</h2>
          </BrakeContain>
        </CarouselCase>
      ) : (
        <CarouselCase>
          <HoodContain>
            <NavHood>
              <img
                onClick={(e) => setMainOptions(1)}
                src={Hood}
                alt='hood png'
              />
            </NavHood>
            <h2>Under the Hood</h2>
          </HoodContain>
          <TiresContain>
            <NavTires>
              <img
                onClick={(e) => setMainOptions(2)}
                src={Tire}
                alt='tire png'
              />
            </NavTires>
            <h2>Tires</h2>
          </TiresContain>
          <MainBrakeContain>
            <NavMainBrake>
              <img
                onClick={(e) => setMainOptions(3)}
                src={Brake}
                alt='brake png'
              />
            </NavMainBrake>
            <h2>Brakes</h2>
          </MainBrakeContain>
        </CarouselCase>
      )}
    </Wrapper>
  );
};
export default Carousel;
