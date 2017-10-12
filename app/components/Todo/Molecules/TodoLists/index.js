import React, { PureComponent } from 'react';
import TodoListsItem from '../TodoListsItem';

export default class TodoLists extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ul className="list-group">
        <TodoListsItem />
        <p className="empty">
          List is empty
        </p>
      </ul>
    );
  }
}
