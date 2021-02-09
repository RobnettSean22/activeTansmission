import React from "react";
import styled from "styled-components";
import Marker from "../../assets/map_icon.png";
import PhoneWhite from "../../assets/phone_icon.png";
import EnvelopeWhite from "../../assets/envelope_icon.png";
import Phone from "../../assets/phone_icon_black.png";
import Envelope from "../../assets/envelope_icon_black.png";
import Identity from "../../assets/profile_icon.png";

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
      text-indent: 32px;
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
  height: 218px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;

  a {
    div {
      width: 28px;
      height: 28px;
      border-radius: 3px;
      border: solid 1px #f7f7f7;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #24278c;
      box-shadow: 1px 6px 9px 0px rgba(0, 0, 0, 0.66);
      .envelope {
        width: 30px;
        height: 30px;
      }
      .phone {
        width: 40px;
        height: 40px;
      }
      .marker {
        width: 25px;
        height: 25px;
      }
    }
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
  .name {
    background-image: url(${Identity});
    background-repeat: no-repeat;
    background-position: left;
    background-size: 30px 30px;
  }
  .email {
    background-image: url(${Envelope});
    background-repeat: no-repeat;
    background-position: left;
    background-size: 29px 29px;
  }
  .mobile {
    background-image: url(${Phone});
    background-repeat: no-repeat;
    background-position: left;
    background-size: 35px 35px;
  }
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
  background: rgb(253, 232, 1);
  border-radius: 5px;
  border: solid 2px #24278c;
`;

const Mobilecontact = (props) => {
  return (
    <Wrapper>
      <ContactTitle>
        <h1>Contact us or Stop by</h1>
      </ContactTitle>
      <ContactContainer>
        <CustomerInputsContainer>
          <input placeholder='Your Name' className='name' />
          <input placeholder='Your Email' className='email' />
          <input placeholder='Your Number' className='mobile' />
          <Message />
          <SendButton>Send</SendButton>
        </CustomerInputsContainer>
        <ContactInfo>
          <a
            style={{ textDecoration: "none" }}
            href='mailto:activebroomfield@gmail.com'
          >
            <div>
              <img className='envelope' src={EnvelopeWhite} alt='mail' />
            </div>
          </a>
          <a style={{ textDecoration: "none" }} href='tel:3034661133'>
            <div>
              <img className='phone' src={PhoneWhite} alt='phone' />
            </div>
          </a>
          <a
            style={{ textDecoration: "none" }}
            href='https://www.google.com/maps/place/Active+Transmission+and+gear/@39.9108341,-105.0800227,17z/data=!3m1!4b1!4m5!3m4!1s0x876b8a4b0e2aa43b:0x5c91e5c97ab2425f!8m2!3d39.91083!4d-105.077834'
            target='_blank'
          >
            <div>
              <img className='marker' src={Marker} alt='pin' />
            </div>
          </a>
        </ContactInfo>
      </ContactContainer>
    </Wrapper>
  );
};
export default Mobilecontact;
