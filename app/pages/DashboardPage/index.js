import React, { PureComponent } from 'react';
import { UserIsAuthenticated } from 'redux-auth';

@UserIsAuthenticated
export default class DashboardPage extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article className="app-content-inner">
        <h1>Welcome to Arabella React Demo!</h1>
        <p>This is page after login</p>
      </article>
    );
  }
}
