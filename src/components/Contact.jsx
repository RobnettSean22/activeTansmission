import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import EmailIcon from "../assets/envelope_icon.png";
import PhoneIcon from "../assets/phone_icon.png";
import MapIcon from "../assets/map_icon.png";
import Mobilecontact from "./mobile_components/Mobilecontact";

const Wrapper = styled.div``;
const ContactInfo = styled.div`
  width: 100%;
  height: 1566px;
  margin: 0 0 42px 0;
  background: #464996;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  h1 {
    font-size: 56px;
    margin: 76.5px 0 101.5px 0;
    font-family: "Lora", serif;
    font-style: italic;
    font-weight: 700;
    color: rgb(247, 247, 247);
    -webkit-text-stroke: 1px rgb(253, 232, 1);
  }
  @media ${(props) => props.theme.mediaQueries.media650} {
    display: none;
  }
`;
const ContactMethods = styled.div`
  width: 1178px;
  height: 224px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;

  div {
    /* width: 383px; */
    width: 333px;
    height: 139px;
    border-radius: 33px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    &:hover {
      background: rgb(247, 238, 136);
      cursor: pointer;
    }
  }
  h3 {
    font-size: 20px;
    color: rgb(247, 247, 247);
    margin: 0 0 2px 0;
  }
`;
const Email = styled.div`
  img {
    width: 87px;
    height: 87px;
    margin-top: 20px;
  }
`;
const Phone = styled.div`
  img {
    width: 153px;
    height: 103px;
  }
`;
const Address = styled.div`
  img {
    width: 76px;
    height: 76px;
    margin-top: 23px;
  }
`;
const MessageContainer = styled.div`
  width: 1178px;
  height: 833px;
  background: rgb(247, 247, 247);
  margin: 0 94px 0 94px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 20px;
  @media ${(props) => props.theme.mediaQueries.media768} {
    width: 95%;
    height: 35%;
  }
`;
const SenderInfo = styled.div`
  width: 405px;
  height: 529px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 73px 109.5px 0 88.5px;

  h3 {
    font-size: 32px;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;

    margin: 0 0 44px 0;
  }
  input {
    width: 100%;
    height: 45.5px;
    margin: 0 0 63.5px 0;
    border: none;
    background: rgb(247, 247, 247);
    font-size: 23px;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    border-bottom: 2px solid black;
    &:focus {
      outline: none;
    }
  }
  @media ${(props) => props.theme.mediaQueries.media768} {
    width: 76%;
    margin: 2% 0 0 1%;
    h3 {
      font-size: 20px;
      margin: 28px 0 10px 0;
    }
    input {
      width: 85%;
      height: 5%;
      font-size: 20px;
    }
  }
`;
const MessageForm = styled.div`
  width: 1059px;
  height: 591px;
  display: flex;
  justify-content: flex-start;
  @media ${(props) => props.theme.mediaQueries.media768} {
    width: 100%;
    height: 100%;
  }
`;

const Message = styled.div`
  width: 542px;
  height: 529px;
  margin: 73px 0 0 0;

  div {
    width: 154px;
    height: 42px;
    background: linear-gradient(
      180deg,
      rgba(247, 247, 247, 0.5) 0%,
      rgba(228, 228, 228, 1) 100%
    );
    position: relative;
    bottom: -13px;
    left: 22px;
    display: flex;
    align-items: center;
    justify-content: center;

    h3 {
      font-size: 36px;
      margin: 0 0 0 0;
    }
  }

  textarea {
    width: 579px;
    height: 434px;
    border-radius: 20px;
    background: rgb(228, 228, 228);
    padding: 20px 12px 12px 12px;
    font-size: 26px;
    :focus {
      outline: none;
    }
  }

  @media ${(props) => props.theme.mediaQueries.media768} {
    textarea {
      width: 90%;
      height: 45%;
    }
  }
`;
const ButtonContainer = styled.div`
  width: 100%;
  height: 304px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  width: 351px;
  height: 89px;
  margin: 0 auto;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(253, 232, 1);
  border: 4px solid rgb(36, 39, 140);
  &:hover {
    cursor: pointer;
  }
  h2 {
    color: rgb(65, 64, 64);
    font-size: 36px;
    font-family: "Lora", sans-serif;
    font-weight: bold;
    -webkit-text-stroke: 1px rgb(36, 39, 140);
  }
`;

const Contact = (props) => {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [inquiry, setInquiry] = useState("");

  const sendEmail = async () => {
    const res = await axios.post("/message", {
      customerName: contactName,
      customerEmail: contactEmail,
      customerNumber: contactNumber,
      message: inquiry,
    });
    const { data } = await res;
    setContactName("");
    setContactEmail("");
    setContactNumber("");
    setInquiry("");
    return data;
  };
  return (
    <Wrapper>
      <Mobilecontact
        mobileSendEmail={sendEmail}
        mobileContactName={contactName}
        setMobileContactName={setContactName}
        mobileContactEmail={contactEmail}
        setMobileContactEmail={setContactEmail}
        mobileContactNumber={contactEmail}
        setMobileContactNumber={setContactEmail}
        mobileInquiry={inquiry}
        setMobileInquiry={setInquiry}
      />
      <ContactInfo>
        <h1>Contact us or Stop By</h1>
        <ContactMethods>
          <a
            style={{ textDecoration: "none" }}
            href='mailto:activebroomfield@gmail.com'
          >
            <Email>
              <img src={EmailIcon} alt='enevlope' />
              <h3>activebroomfield@gmail.com</h3>
            </Email>
          </a>
          <a style={{ textDecoration: "none" }} href='tel:3034661133'>
            <Phone>
              <img src={PhoneIcon} alt='phone ' />
              <h3> +1 303-466-1133</h3>
            </Phone>
          </a>
          <a
            style={{ textDecoration: "none" }}
            href='https://www.google.com/maps/place/Active+Transmission+and+gear/@39.9108341,-105.0800227,17z/data=!3m1!4b1!4m5!3m4!1s0x876b8a4b0e2aa43b:0x5c91e5c97ab2425f!8m2!3d39.91083!4d-105.077834'
            target='_blank'
          >
            <Address>
              <img src={MapIcon} alt='enevlope ' />
              <h3>7223 W 118th Pl unit a</h3>
            </Address>
          </a>
        </ContactMethods>
        <MessageContainer>
          <MessageForm>
            <SenderInfo>
              <h3>Your Name</h3>
              <input
                value={contactName}
                onChange={(e) => {
                  setContactName(e.target.value);
                }}
                placeholder='Michael Smith'
              />
              <h3>Your Email</h3>
              <input
                value={contactEmail}
                onChange={(e) => {
                  setContactEmail(e.target.value);
                }}
                placeholder='email@email.com'
              />
              <h3>Your Number</h3>
              <input
                value={contactNumber}
                onChange={(e) => {
                  setContactNumber(e.target.value);
                }}
                placeholder='000-000-0000'
              />
            </SenderInfo>
            <Message>
              <div>
                <h3>Message</h3>
              </div>

              <textarea
                value={inquiry}
                onChange={(e) => setInquiry(e.target.value)}
              />
            </Message>
          </MessageForm>
          <ButtonContainer>
            <Button onClick={(e) => sendEmail()}>
              <h2>Send Message</h2>
            </Button>
          </ButtonContainer>
        </MessageContainer>
      </ContactInfo>
    </Wrapper>
  );
};
export default Contact;
