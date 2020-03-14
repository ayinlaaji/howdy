import { useReducer, useEffect, useState, Reducer } from "react";
import { Message } from "@howdy/typings";
import { messages } from "./message.json";

enum ActionType {
  UPDATE_STATE = 0
}

type State = {
  messages: Message[];
};

type Action = {
  type: ActionType;
  payload: Partial<State>;
};

const reducer: Reducer<State, Action> = (state, { type, payload }) => {
  switch (type) {
    default:
      return state;
    case ActionType.UPDATE_STATE:
      return {
        ...state,
        ...payload
      };
  }
};

const defaultState: State = {
  messages: messages
};

type IUseMessages = () => {
  messages: Message[];
};

const useMessage: IUseMessages = () => {
  //const [state, dispatch] = useReducer(reducer, defaultState);
  //const [currentMessage, setCurrentMessage] = useState<Message>(defaultMessage);

  /*
  const pks = new MessageService();

  useEffect(() => {
    listMessages();
  }, []);
  */

  return {
    // messages: state.messages,
    getMessage: async (id: string) => {
      /*
      let message = await pks.getMessage(id);
      if (message) {
        setCurrentMessage(message);
      }
      */
    }
  };
};

export default useMessage;
