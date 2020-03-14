import React, { FunctionComponent } from "react";
import { Grid } from "semantic-ui-react";

type Props = {
  Friends: FunctionComponent;
  Messages: FunctionComponent;
  MessageInput: FunctionComponent;
};

const IndexTemplate = ({ Friends, Messages, MessageInput }: Props) => (
  <Grid >
    <Grid.Column stretched width={5}>
      <Friends />
    </Grid.Column>
    <Grid.Column stretched width={11}>
      <Grid >
        <Grid.Row>
          <Messages />
        </Grid.Row>
        <Grid.Row>
          <MessageInput />
        </Grid.Row>
      </Grid>
    </Grid.Column>
  </Grid>
);

export default IndexTemplate;
