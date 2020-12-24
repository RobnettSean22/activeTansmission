import React from "react";
import styled from "styled-components";
import Engine from "atg_engine_vect_white.png";
import Tranny from "atg_trans_white.png";
import Brake from "atg_brake_vect_white.png";
import Hood from "atg_hood_white.png";
import Tire from "tire_vect_white.png";

const Wrapper = styled.div`
  width: 500px;
  height: 100%;
`;
const CarouselCase = styled.div``;
const EngineContain = styled.div``;
const TransmissionContain = styled.div``;
const BrakeContain = styled.div``;
const NavEngine = styled.div``;
const NavTranny = styled.div``;
const NavBrake = styled.div``;
const HoodContain = styled.div``;
const TiresContain = styled.div``;
const MainBrakeContain = styled.div``;
const NavHood = styled.div``;
const NavTires = styled.div``;
const NavMainBrake = styled.div``;

const Carousel = (props) => {
  return (
    <Wrapper>
      {true ? (
        <CarouselCase>
          <EngineContain>
            <NavEngine>
              <img src={Engine} alt='engine png' />
            </NavEngine>
            <h2>Engine Work</h2>
          </EngineContain>
          <TransmissionContain>
            <NavTranny>
              <img src={Tranny} alt='transmission png' />
            </NavTranny>
            <h2>Transmission</h2>
          </TransmissionContain>
          <BrakeContain>
            <NavBrake>
              <img src={Brake} alt='brake png' />
            </NavBrake>
            <h2>Brakes</h2>
          </BrakeContain>
        </CarouselCase>
      ) : (
        <CarouselCase>
          <HoodContain>
            <NavHood>
              <img src={Hood} alt='hood png' />
            </NavHood>
            <h2>Under the Hood</h2>
          </HoodContain>
          <TiresContain>
            <NavTires>
              <img src={Tire} alt='hood png' />
            </NavTires>
            <h2>Tires</h2>
          </TiresContain>
          <MainBrakeContain>
            <NavMainBrake>
              <img src={Brake} alt='brake png' />
            </NavMainBrake>
            <h2>Brakes</h2>
          </MainBrakeContain>
        </CarouselCase>
      )}
    </Wrapper>
  );
};
export default Carousel;
