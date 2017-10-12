import React, { PureComponent } from 'react';
import { Button } from 'react-bootstrap';
import AddTodoListItem from 'components/AddTodoListItem';
import SearchTodoList from 'components/SearchTodoList';
import TodoLists from 'components/TodoLists';

export default class ToDoLists extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="todos">
        <h3 className="todos__title">TODO list</h3>
        <button className="todos__back btn btn-default btn-sm">
          <span className="glyphicon glyphicon-arrow-left" />
          Back
        </button>

        <div className="todos__inputs">
          <AddTodoListItem />
          <SearchTodoList />
        </div>

        <TodoLists />

        <small className="todos__hint">
          Hint: double-click a list item to edit it.
        </small>
      </div>
    );
  }
}
