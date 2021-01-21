import React, { useState } from "react";
import styled from "styled-components";
import Frame from "../assets/atg-frame-white.png";
import Tire from "../assets/atg_tire_vect_white.png";
import Hood from "../assets/atg_uth.png";

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

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

const IconContainer = styled.div`
  width: 134px;
  height: 134px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(47, 46, 46);
`;

const Tires = styled.div`
  width: 134px;
  height: 134px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(47, 46, 46);
  img {
    width: 200px;
    height: 200px;
  }
`;
const TheHood = styled.div`
  width: 134px;
  height: 134px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(47, 46, 46);
  img {
    width: 191px;
    height: 191px;
  }
`;
const FrameWork = styled.div`
  width: 134px;
  height: 134px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(47, 46, 46);

  img {
    width: 174px;
    height: 174px;
  }
`;

const Carousel = ({
  forRepair,
  setRepairOptions,
  setMainOptions,
  repairOptions,
  mainOptions,
}) => {
  return (
    <Wrapper>
      {forRepair ? (
        <CarouselCase>
          <Container>
            <Tires className={repairOptions === 1 ? "active" : "inactive"}>
              <img
                onClick={(e) => setRepairOptions(1)}
                src={Tire}
                alt='engine png'
              />
            </Tires>
            <h2>Wheels</h2>
          </Container>
          <Container>
            <TheHood className={repairOptions === 2 ? "active" : "inactive"}>
              <img
                onClick={(e) => setRepairOptions(2)}
                src={Hood}
                alt='transmission png'
              />
            </TheHood>
            <h2>Under the Hood</h2>
          </Container>
          <Container>
            <FrameWork className={repairOptions === 3 ? "active" : "inactive"}>
              <img
                onClick={(e) => setRepairOptions(3)}
                src={Frame}
                alt='brake png'
              />
            </FrameWork>
            <h2>Frame</h2>
          </Container>
        </CarouselCase>
      ) : (
        <CarouselCase>
          <Container>
            <Tires className={mainOptions === 1 ? "active" : "inactive"}>
              <img
                onClick={(e) => setMainOptions(1)}
                src={Tire}
                alt='hood png'
              />
            </Tires>
            <h2>Wheels</h2>
          </Container>
          <Container>
            <TheHood className={mainOptions === 2 ? "active" : "inactive"}>
              <img
                onClick={(e) => setMainOptions(2)}
                src={Hood}
                alt='tire png'
              />
            </TheHood>
            <h2>Under the Hood</h2>
          </Container>
          <Container>
            <FrameWork className={mainOptions === 3 ? "active" : "inactive"}>
              <img
                onClick={(e) => setMainOptions(3)}
                src={Frame}
                alt='brake png'
              />
            </FrameWork>
            <h2>Frame</h2>
          </Container>
        </CarouselCase>
      )}
    </Wrapper>
  );
};
export default Carousel;
