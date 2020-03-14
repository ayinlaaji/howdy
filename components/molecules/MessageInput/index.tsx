import { Input } from "semantic-ui-react";
import styles from "./MessageInput.module.css"

const MessageInput = () => (
  <Input className={styles.input} type="name" placeholder="Type message here" />
);

export default MessageInput;
