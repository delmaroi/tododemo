import React, { PureComponent } from 'react';
import { bind } from 'decko';
import type {
  ChatTextMessageProps,
} from 'react-chat/lib/Message/types';

export default class ChatMessageTextField extends PureComponent {
  @bind
  handleChange(event: Event & { target: HTMLInputElement }): void {
    const enteredText = event.target.value;

    this.props.onTextChange(enteredText);
  }

  props: ChatTextMessageProps;

  render() {
    return (
      <input
        type="text"
        name="message"
        placeholder="Your message"
        value={this.props.text}
        onChange={this.handleChange}
      />
    );
  }
}
