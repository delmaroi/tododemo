/**
*
* UsersTable
*
*/

import React from 'react';
import createTableContainer, {
  TextFieldFilterDropdown,
  DateRangeFilterDropdown,
} from 'react-table-container';
import { Link } from 'react-router-dom';
import { getUsers } from './api';

const UsersTable = () => (<div></div>);

export default createTableContainer(UsersTable, {
  name: 'users',
  columns: [{
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    sorter: true,
    render: renderGoToCustomerPageLink,
    FilterDropdownComponent: TextFieldFilterDropdown,
  }, {
    title: 'First name',
    dataIndex: 'firstName',
    key: 'firstName',
    sorter: true,
    render: renderGoToCustomerPageLink,
    FilterDropdownComponent: TextFieldFilterDropdown,
  }, {
    title: 'Last name',
    dataIndex: 'lastName',
    key: 'lastName',
    sorter: true,
    FilterDropdownComponent: TextFieldFilterDropdown,
  }, {
    title: 'E-mail',
    dataIndex: 'email',
    key: 'email',
    sorter: true,
    FilterDropdownComponent: TextFieldFilterDropdown,
  }, {
    title: 'Date joined',
    dataIndex: 'dateJoined',
    key: 'dateJoined',
    sorter: true,
    FilterDropdownComponent: DateRangeFilterDropdown,
  }],
  fetchDataMethod: getUsers,
});

function renderGoToCustomerPageLink(customerId) {
  return (<Link to={`/users/${customerId}`}>{customerId}</Link>);
}
