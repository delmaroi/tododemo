/*
 *
 * ChatPage
 *
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import ChatComponent from 'react-chat/lib/Chat';
import ChatMessageForm from 'react-chat/lib/Message/ChatMessageForm';
import ChatTextMessage from 'components/Chat/molecules/ChatTextMessage';
import { UserIsAuthenticated } from 'redux-auth';
import { bind } from 'decko';

@UserIsAuthenticated
export default class ChatPage extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
  };

  @bind
  renderMessageForm() {
    const { threadId } = this.props.match.params;

    return (
      <ChatMessageForm
        threadId={threadId}
        component={ChatTextMessage}
      />
    );
  }

  render() {
    const { threadId } = this.props.match.params;

    return (
      <div>
        <Helmet
          title="Chat"
          meta={[
            { name: 'description', content: 'Chat' },
          ]}
        />

        <ChatComponent
          renderMessageForm={this.renderMessageForm}
          threadId={threadId}
        />
      </div>
    );
  }
}
