import React from "react";
import Friend from "@howdy/components/molecules/Friend";
import { Friend as IFriend } from "@howdy/typings";
import { List } from "semantic-ui-react";
import styles from "./Friends.module.css"

type Props = {
  friends: IFriend[];
};

const Friends = ({ friends }: Props) => (
  <List divided className={styles.list}>
    {friends.map(friend => (
      <Friend key={friend.id} {...friend} />
    ))}
  </List>
);

export default Friends;
