import React, { PureComponent } from 'react';

export default class TodoItem extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <li className="lists-item">
        title
        <span className="label label-default">
          0
        </span>
        <button
          className="btn btn-default btn-sm">
          Show
        </button>
        <button
          className="btn btn-danger btn-sm">
          <span className="glyphicon glyphicon-remove" />
        </button>
      </li>
    );
  }
}
