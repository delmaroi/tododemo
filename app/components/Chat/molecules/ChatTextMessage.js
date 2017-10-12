/* @flow */

import React, { PureComponent } from 'react';
import { bind } from 'decko';
import type {
  ChatTextMessageProps,
} from 'react-chat/lib/Message/types';
import ChatMessageTextField from '../atoms/ChatMessageTextField';


export default class ChatTextMessage extends PureComponent {
  @bind
  handleTextChange(text: string) {
    this.props.setText(text);
  }

  props: ChatTextMessageProps;

  render() {
    const { onSubmit } = this.props;

    return (
      <form
        className="chat-footer-msg"
        method="POST"
        onSubmit={onSubmit}
      >
        <div style={{ display: 'flex', width: '100%' }}>
          <div style={{ flex: 1, marginRight: '5px' }}>
            <ChatMessageTextField
              onTextChange={this.handleTextChange}
              text={this.props.text}
            />
          </div>
          <button type="submit" >submit</button>
        </div>
      </form>
    );
  }
}
