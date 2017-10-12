import React, { PureComponent } from 'react';
import { UserHasRole } from 'redux-auth';

@UserHasRole(['10_example_user', '20_example_admin'])
export default class OnlyForUserWithRoleUserOrAdminPage extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article>
        <h1>This page is available only for users wit role 10_example_user or 20_example_admin</h1>
      </article>
    );
  }
}
