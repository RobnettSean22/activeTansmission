import React, { useEffect, useState } from "react";

import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
  width: 620px;
  height: 350px;
  position: absolute;
  top: 206px;
  left: 416px;
  background: black;
  border-radius: 31px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: solid 1px rgb(64, 63, 63);
  div {
    width: 100%;
  }
`;

const TitleContainer = styled.div`
  height: 69px;
  background: rgb(36, 39, 140);
  border-radius: 31px 31px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(250, 250, 250);
  h1 {
    font-family: "Montserrat", sans-serif;
  }
`;
const Rating = styled.div`
  height: 53px;
  background: rgb(250, 250, 250);
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  h2 {
    font-size: 20px;
    margin: 0 0 0 13px;
  }
`;
const ReviewContainer = styled.div`
  height: 145px;
  border-top: solid 1px rgb(64, 63, 63);
  border-bottom: solid 1px rgb(64, 63, 63);
  background: rgb(250, 250, 250);
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin: 17px 88.5px 17px 88.5px;
    font-size: 20px;
    line-height: 1.45;
  }
`;
const NameContainer = styled.div`
  height: 83px;
  border-radius: 0 0 31px 31px;
  background: rgb(250, 250, 250);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  h2 {
    font-family: "Montserrat", sans-serif;
    font-style: italic;
    font-size: 24px;
    margin: 0 29px 0 0;
  }
`;

const Float = (props) => {
  // const reviews = async () => {
  //   const res = await axios.get(
  //     `https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews`
  //   );
  // };
  return (
    <Wrapper>
      <TitleContainer>
        <h1>Our Customers</h1>
      </TitleContainer>
      <Rating>
        <h2>(Stars)</h2>
      </Rating>
      <ReviewContainer>
        <p>
          “Professional and quality service. If you want an honest mechanic
          shop, go here. They’ll tell you what needs to be tended to.”
        </p>
      </ReviewContainer>
      <NameContainer>
        <h2>Pieter Veen</h2>
      </NameContainer>
    </Wrapper>
  );
};
export default Float;
