import React, { PureComponent } from 'react';
import TodoListItem from '../TodoListItem';

export default class TodoList extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ul className="list-group">
        <TodoListItem />
        <p className="empty">
          List is empty
        </p>
      </ul>
    );
  }
}
