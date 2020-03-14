import React from "react";
import { Friend as Props } from "@howdy/typings";
import { Image, List } from "semantic-ui-react";

const style = { height: "5em" }

const Friend = ({ name, imgSrc }: Props) => (
  <List.Item style={style}>
    <Image src="https://react.semantic-ui.com/images/wireframe/square-image.png" avatar />
    <List.Content>{name}</List.Content>
  </List.Item>
);

export default Friend;
