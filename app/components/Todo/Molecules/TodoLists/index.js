import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TodoListsItem from '../TodoListsItem';

export default class TodoLists extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    results: PropTypes.object.isRequired,
  };

  renderListItems() {
    const {
      results,
    } = this.props;

    return results.map((item) => <TodoListsItem id={item.id} name={item.name} todosCount={item.todosCount} />);
  }

  render() {
    return (
      <ul className="list-group">
        {this.renderListItems()}
      </ul>
    );
  }
}
