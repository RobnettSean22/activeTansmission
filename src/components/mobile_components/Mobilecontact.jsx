import React from "react";
import styled from "styled-components";
import Marker from "../../assets/map_icon.png";
import Phone from "../../assets/phone_icon.png";
import Envelope from "../../assets/envelope_icon.png";

const Wrapper = styled.div`
  display: none;
  @media screen and (max-width: 414px) {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    background: #464996;
    input {
      width: 284px;
      height: 27px;
      border-radius: 4px;
      margin-left: 60px;
      margin-bottom: 34px;
    }
  }
`;
const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const ContactInfo = styled.div`
  width: 65px;
  height: 147px;
  background: green;

  div {
    width: 28px;
    height: 28px;
  }
`;
const ContactTitle = styled.div`
  width: 315px;
  height: 42px;

  margin-top: 62.6px;
  margin-bottom: 44.5px;
  h1 {
    margin: 0;
    font-size: 31px;
  }
`;

const CustomerInputsContainer = styled.div`
  width: 349px;
  height: 548px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const Message = styled.textarea`
  width: 284px;
  height: 218px;
  border-radius: 4px;
  margin-left: 60px;
  margin-top: 20px;
  margin-bottom: 38px;
`;

const SendButton = styled.button`
  width: 298px;
  height: 55px;
  margin-left: 58px;
  margin-bottom: 50px;
  font-size: 20px;
`;

const Mobilecontact = (props) => {
  return (
    <Wrapper>
      <ContactTitle>
        <h1>Contact us or Stop by</h1>
      </ContactTitle>
      <ContactContainer>
        <CustomerInputsContainer>
          <input className='name' />
          <input className='email' />
          <input className='phone' />
          <Message />
          <SendButton>Send</SendButton>
        </CustomerInputsContainer>
        <ContactInfo>
          <div className='envelope'>
            <a
              style={{ textDecoration: "none" }}
              href='mailto:activebroomfield@gmail.com'
            >
              <img />
            </a>
          </div>
          <div className='phone'>
            <a style={{ textDecoration: "none" }} href='tel:3034661133'>
              <img />
            </a>
          </div>
          <div className='marker'>
            <a
              style={{ textDecoration: "none" }}
              href='https://www.google.com/maps/place/Active+Transmission+and+gear/@39.9108341,-105.0800227,17z/data=!3m1!4b1!4m5!3m4!1s0x876b8a4b0e2aa43b:0x5c91e5c97ab2425f!8m2!3d39.91083!4d-105.077834'
              target='_blank'
            >
              <img />
            </a>
          </div>
        </ContactInfo>
      </ContactContainer>
    </Wrapper>
  );
};
export default Mobilecontact;
