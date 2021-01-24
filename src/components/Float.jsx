import React from "react";

import styled from "styled-components";

const Wrapper = styled.div`11
  width: 1336px;
  height: 214px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 52px;
  div {
    width: 100%;
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

  background: rgb(250, 250, 250);
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    padding: 17px 88.5px 0px 88.5px;
    font-size: 20px;
    line-height: 1.45;
  }
`;
const NameContainer = styled.div`
  height: 83px;

  background: rgb(250, 250, 250);
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
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
