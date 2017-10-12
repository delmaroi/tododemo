/*
 *
 * ExampleTablePage
 *
 */

import React, { PureComponent } from 'react';
import { UserIsAdmin } from 'redux-auth';
import UsersTable from 'components/UsersTable';

@UserIsAdmin
export default class ExampleTablePage extends PureComponent {// eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h1>Table</h1>

        <UsersTable />
      </div>
    );
  }
}
