import React, { PureComponent } from 'react';

export default class HomePage extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article className="app-content-inner">
        <h1>Welcome to Arabella React Demo!</h1>
        <p>do roboty!</p>
        <img alt="" src="https://media.giphy.com/media/xT5LMSleuVuCe24KLC/giphy.gif" />
      </article>
    );
  }
}
