/*
 * Mentions
 */

import React, { PureComponent } from 'react';
import {
  MentionsInput,
  Mention,
} from 'react-mentions';
import { bind } from 'decko';
import defaultStyle from './defaultStyle';
import defaultMentionStyle from './defaultMentionStyle';

const users = [
  {
    id: 'walter',
    display: 'Walter White',
  },
  {
    id: 'jesse',
    display: 'Jesse Pinkman',
  },
  {
    id: 'gus',
    display: 'Gustavo "Gus" Fring',
  },
];

export default class MentionsExamplePage extends PureComponent {
  state = {
    value: '',
  };

  @bind
  handleChange(event, newValue, newPlainTextValue) {
    this.setState({ value: newPlainTextValue });
  }

  render() {
    return (
      <div>
        <div className="msg msg--info">
          <p>
            Documentations:
          </p>
          <ul>
            <li><a href="https://github.com/effektif/react-mentions" target="_blank">React Mentions</a></li>
          </ul>
        </div>

        <div>
          <MentionsInput
            value={this.state.value}
            placeholder={"Mention people using '@'"}
            style={defaultStyle}
            onChange={this.handleChange}
          >
            <Mention
              trigger="@"
              data={users}
              style={defaultMentionStyle}
            />
          </MentionsInput>
        </div>
      </div>
    );
  }
}
