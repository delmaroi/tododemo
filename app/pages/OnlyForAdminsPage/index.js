import React, { PureComponent } from 'react';
import { UserIsAdmin } from 'redux-auth';

@UserIsAdmin
export default class OnlyForAdminsPage extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article>
        <h1>This page is available only for admins.</h1>
      </article>
    );
  }
}
