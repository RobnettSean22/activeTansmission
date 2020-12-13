import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Wrapper = styled.div``;
const ContactInfo = styled.div`
  width: 100%;
  height: 1566px;
  margin: 36px 0 42px 0;
  background: rgb(38, 39, 140);
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
const MessageForm = styled.div`
  width: 1059px;
  height: 591px;
`;
const SenderInfo = styled.div``;
const Message = styled.div``;
const Button = styled.div`
  width: 351px;
  height: 89px;
  margin: 0 auto;
  background: black;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    color: White;
    font-size: 36px;
  }
`;

const Contact = (props) => {
  return (
    <Wrapper>
      <Header />
      <ContactInfo>
        <h1>Stop By or Get in Touch</h1>
        <ContactMethods>
          <Email></Email>
          <Phone></Phone>
          <Address></Address>
        </ContactMethods>
        <MessageContainer>
          <MessageForm>
            <SenderInfo></SenderInfo>
            <Message></Message>
          </MessageForm>
          <Button>
            <h2>Send Message</h2>
          </Button>
        </MessageContainer>
      </ContactInfo>
      <Footer />
    </Wrapper>
  );
};
export default Contact;
