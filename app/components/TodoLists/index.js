import React, { PureComponent } from 'react';
import TodoItem from 'components/TodoItem';

export default class TodoLists extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ul className="list-group">
        <TodoItem />
        <p className="empty">
          List is empty
        </p>
      </ul>
    );
  }
}
