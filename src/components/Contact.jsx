import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Wrapper = styled.div``;
const ContactInfo = styled.div`
  width: 100%;
  height: 1566px;
  margin: 36px 0 42px 0;
  background: rgb(40, 41, 80, 0.83);
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
`;
const ContactMethods = styled.div`
  width: 1178px;
  height: 224px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  div {
    width: 383px;
    height: 159px;
    border-radius: 33px;

    &:hover {
      background: rgb(247, 238, 136);
      cursor: pointer;
    }
  }
`;
const Email = styled.div``;
const Phone = styled.div``;
const Address = styled.div``;
const MessageContainer = styled.div`
  width: 1178px;
  height: 833px;
  background: rgb(247, 247, 247);
  margin: 0 94px 0 94px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 20px;
`;
const SenderInfo = styled.div`
  width: 405px;
  height: 529px;
  background: ;
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
`;
const MessageForm = styled.div`
  width: 1059px;
  height: 591px;
  display: flex;
  justify-content: flex-start;
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
    width: 100%;
    height: 456px;
    border-radius: 20px;
    background: rgb(228, 228, 228);
  }
`;
const ButtonContainer = styled.div`
  width: 100%;
  height: 304px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.div`
  width: 351px;
  height: 89px;
  margin: 0 auto;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(247, 238, 136);
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
  return (
    <Wrapper>
      <Header />
      <ContactInfo>
        <h1>Stop By or Get in Touch</h1>
        <ContactMethods>
          <Email>
            <h3>activebroomfield@gmail.com</h3>
          </Email>
          <Phone>
            <h3>+1 303-466-1133</h3>
          </Phone>
          <Address>
            {" "}
            <h3>7223 W 118th Pl unit a</h3>
          </Address>
        </ContactMethods>
        <MessageContainer>
          <MessageForm>
            <SenderInfo>
              <h3>Your Name</h3>
              <input placeholder='Michael Smith' />
              <h3>Your Email</h3>
              <input placeholder='email@email.com' />
              <h3>Your Number</h3>
              <input placeholder='000-000-0000' />
            </SenderInfo>
            <Message>
              <div>
                <h3>Message</h3>
              </div>

              <textarea></textarea>
            </Message>
          </MessageForm>
          <ButtonContainer>
            <Button>
              <h2>Send Message</h2>
            </Button>
          </ButtonContainer>
        </MessageContainer>
      </ContactInfo>
      <Footer />
    </Wrapper>
  );
};
export default Contact;
