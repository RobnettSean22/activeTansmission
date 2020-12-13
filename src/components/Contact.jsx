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
`;
const ContactMethods = styled.div`
  width: 1178px;
  height: 224px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  div {
    width: 383px;
    height: 159px;
    border-radius: 33px;
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
  justify-content: flex-start;
  border-radius: 20px;
`;
const MessageForm = styled.div``;
const SenderInfo = styled.div``;
const Message = styled.div``;

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
          <button></button>
        </MessageContainer>
      </ContactInfo>
      <Footer />
    </Wrapper>
  );
};
export default Contact;
