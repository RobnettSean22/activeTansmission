import React from "react";
import styled from "styled-components";

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
            <NavEngine></NavEngine>
            <h2></h2>
          </EngineContain>
          <TransmissionContain>
            <NavTranny></NavTranny>
            <h2></h2>
          </TransmissionContain>
          <BrakeContain>
            <NavBrake></NavBrake>
            <h2></h2>
          </BrakeContain>
        </CarouselCase>
      ) : (
        <CarouselCase>
          <HoodContain>
            <NavHood></NavHood>
            <h2></h2>
          </HoodContain>
          <TiresContain>
            <NavTires></NavTires>
            <h2></h2>
          </TiresContain>
          <MainBrakeContain>
            <NavMainBrake></NavMainBrake>
            <h2></h2>
          </MainBrakeContain>
        </CarouselCase>
      )}
    </Wrapper>
  );
};
export default Carousel;
