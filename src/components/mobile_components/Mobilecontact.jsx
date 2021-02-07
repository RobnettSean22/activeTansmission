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
    align-items: center;
    background: #464996;
    input {
      width: 284px;
      height: 27px;
    }
  }
`;

const ContactInfo = styled.div`
  width: 44px;
  height: 147px;
  div {
    width: 28px;
    height: 28px;
  }
`;
const ContactTitle = styled.div`
  width: 315px;
  height: 42px;
`;

const CustomerInputsContainer = styled.div`
  width: 349px;
  height: 548px;
`;

const Message = styled.textarea``;

const Mobilecontact = (props) => {
  return (
    <Wrapper>
      <ContactTitle></ContactTitle>
      <CustomerInputsContainer>
        <input className='name' />
        <input className='email' />
        <input className='phone' />
        <Message />
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
      </CustomerInputsContainer>
    </Wrapper>
  );
};
export default Mobilecontact;
