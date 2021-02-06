import React, { useState } from "react";
import styled from "styled-components";
import Frame from "../assets/atg-frame-white.png";
import Tire from "../assets/atg_tire_vect_white.png";
import Hood from "../assets/atg_uth.png";
import "../components/css_sheets/topOptions.scss";

const Wrapper = styled.div`
  width: 500px;
  height: 100%;
  @media screen and (max-width: 414px) {
    width: 39px;
    height: 170px;
    background: orange;
    margin-left: 10px;
    position: fixed;
    right: 3px;
    top: 50%;
  }
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

  div {
    width: 134px;
    height: 134px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid white;
    overflow: hidden;
    box-shadow: 0px 0px 25px 5px rgba(0, 0, 0, 0.2);
    & img {
      :hover {
        cursor: pointer;
      }
    }
  }
  & .tires {
    width: 200px;
    height: 200px;
  }
  & .hood {
    width: 191px;
    height: 191px;
  }
  & .frame {
    width: 174px;
    height: 174px;
  }
  .active {
    border: 3px solid rgb(253, 232, 1);
    background: rgb(47, 46, 46);
  }
`;

const Carousel = ({
  forRepair,
  setRepairOptions,
  setMainOptions,
  repairOptions,
  mainOptions,
}) => {
  console.log(repairOptions);
  return (
    <Wrapper>
      {forRepair ? (
        <CarouselCase>
          <Container>
            <div className={repairOptions === 1 ? "active" : null}>
              <img
                className='tires'
                onClick={(e) => setRepairOptions(1)}
                src={Tire}
                alt='engine png'
              />
            </div>

            <h2>Wheels</h2>
          </Container>
          <Container>
            <div className={repairOptions === 2 ? "active" : null}>
              <img
                className='hood'
                onClick={(e) => setRepairOptions(2)}
                src={Hood}
                alt='transmission png'
              />
            </div>
            <h2>Under the Hood</h2>
          </Container>
          <Container>
            <div className={repairOptions === 3 ? "active" : null}>
              <img
                className='frame'
                onClick={(e) => setRepairOptions(3)}
                src={Frame}
                alt='brake png'
              />
            </div>
            <h2>Frame</h2>
          </Container>
        </CarouselCase>
      ) : (
        <CarouselCase>
          <Container>
            <div className={mainOptions === 1 ? "active" : null}>
              <img
                className='tires'
                onClick={(e) => setMainOptions(1)}
                src={Tire}
                alt='hood png'
              />
            </div>
            <h2>Wheels</h2>
          </Container>
          <Container>
            <div className={mainOptions === 2 ? "active" : null}>
              <img
                className='hood'
                onClick={(e) => setMainOptions(2)}
                src={Hood}
                alt='tire png'
              />
            </div>
            <h2>Under the Hood</h2>
          </Container>
          <Container>
            <div className={mainOptions === 3 ? "active" : null}>
              <img
                className='frame'
                onClick={(e) => setMainOptions(3)}
                src={Frame}
                alt='brake png'
              />
            </div>
            <h2>Frame</h2>
          </Container>
        </CarouselCase>
      )}
    </Wrapper>
  );
};
export default Carousel;
