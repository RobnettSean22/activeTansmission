import React from "react";

import styled from "styled-components";

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
`;
const Rating = styled.div`
  height: 53px;
  background: rgb(250, 250, 250);
`;
const ReviewContainer = styled.div`
  height: 145px;
  border-top: solid 1px rgb(64, 63, 63);
  border-bottom: solid 1px rgb(64, 63, 63);
  background: rgb(250, 250, 250);
`;
const NameContainer = styled.div`
  height: 83px;
  border-radius: 0 0 31px 31px;
  background: rgb(250, 250, 250);
`;

const Float = (props) => {
  return (
    <Wrapper>
      <TitleContainer></TitleContainer>
      <Rating></Rating>
      <ReviewContainer></ReviewContainer>
      <NameContainer></NameContainer>
    </Wrapper>
  );
};
export default Float;
