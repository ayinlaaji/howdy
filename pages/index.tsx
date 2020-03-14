import React from "react";
import constate from "constate";
import IndexTemplate from "@howdy/templates/index";
import Messages from "@howdy/components/organisms/Messages";
import Friends from "@howdy/components/organisms/Friends";
import MessageInput from "@howdy/components/molecules/MessageInput";

const Index = () => (
  <IndexTemplate
    Messages={ConnectedMessages}
    Friends={ConnectedFriends}
    MessageInput={ConnectedMessageInput}
  />
);

export default Index;

const ConnectedMessages = () => {
  return <Messages messages={[]} />;
};
const ConnectedFriends = () => {
  return <Friends friends={[]} />;
};
const ConnectedMessageInput = () => {
  return <MessageInput />;
};
