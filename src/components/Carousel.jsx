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
const WheelContain = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;
const UthContain = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;
const FrameContain = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
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

const Carousel = ({ forRepair, setRepairOptions, setMainOptions }) => {
  const [focused, setFocused] = useState(1);
  return (
    <Wrapper>
      {forRepair ? (
        <CarouselCase>
          <WheelContain>
            <Tires>
              <img
                onClick={(e) => setRepairOptions(1)}
                src={Tire}
                alt='engine png'
              />
            </Tires>
            <h2>Wheels</h2>
          </WheelContain>
          <UthContain>
            <TheHood>
              <img
                onClick={(e) => setRepairOptions(2)}
                src={Hood}
                alt='transmission png'
              />
            </TheHood>
            <h2>Under the Hood</h2>
          </UthContain>
          <FrameContain>
            <FrameWork>
              <img
                onClick={(e) => setRepairOptions(3)}
                src={Frame}
                alt='brake png'
              />
            </FrameWork>
            <h2>Frame</h2>
          </FrameContain>
        </CarouselCase>
      ) : (
        <CarouselCase>
          <HoodContain>
            <Tires>
              <img
                onClick={(e) => setMainOptions(1)}
                src={Tire}
                alt='hood png'
              />
            </Tires>
            <h2>Wheels</h2>
          </HoodContain>
          <TiresContain>
            <TheHood>
              <img
                onClick={(e) => setMainOptions(2)}
                src={Hood}
                alt='tire png'
              />
            </TheHood>
            <h2>Under the Hood</h2>
          </TiresContain>
          <FrameContain>
            <FrameWork>
              <img
                onClick={(e) => setMainOptions(3)}
                src={Frame}
                alt='brake png'
              />
            </FrameWork>
            <h2>Frame</h2>
          </FrameContain>
        </CarouselCase>
      )}
    </Wrapper>
  );
};
export default Carousel;
