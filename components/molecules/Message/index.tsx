import React from "react";
import { Message as IMessage } from "@howdy/typings";
import { Segment } from "semantic-ui-react";
import styles from "./Message.module.css"

type Props = IMessage & {};
//<Image image={message.imgSrc} />
//<p> {capitalize(message.sentBy)} </p>
//<span> {isoTime(time)} </span>
const Message = ({ message }: Props) => (
  <Segment className={styles.message}>
    {message}
  </Segment>
);
export default Message;
/*
const align = (curUser, user) => {
  return curUser === user;
};

const isoTime = time => {
  var newTime = new Date(time);
  return newTime.toISOString();
};
const capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const Welcome = styled.div`
  height: 100vh;
`;

const Aside = styled.aside`
  background-color: #329278;
  float: left;
  height: 100%;
  width: 30%;
`;

const AppName = styled.h1`
  color: #f8f9fd;
  margin-top: 20%;
  margin-left: 20%;
  font-weight: 900;
  font-size: 2rem;
`;

const Content = styled.div`
  float: left;
  width: 70%;
  height: 100%;
  text-align: center;
`;



const Input = styled.input`
  text-align: left;
  width: 70%;
  height: 100%;
  padding-left: 5%;
`;

const Button = styled.button`
  width: 30%;
  height: 100%;
  text-align: center;
`;

*/
