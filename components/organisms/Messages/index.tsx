import React from "react";
import { Message as IMessage } from "@howdy/typings";
import Message from "@howdy/components/molecules/Message";
import { List, Container } from "semantic-ui-react";
import styles from "./Messages.module.css"

type Props = {
  messages: IMessage[];
};

const Messages = ({ messages }: Props) => (
  <Container className={styles.messages}>
    <List >
      {messages.map(message => (
        <Message key={message.id} {...message} />
      ))}
    </List>
  </Container>
);

export default Messages;
