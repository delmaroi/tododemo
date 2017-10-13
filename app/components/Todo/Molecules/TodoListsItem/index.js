import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ButtonDetails from 'components/Todo/Atoms/ButtonDetails';
import ButtonRemove from 'components/Todo/Atoms/ButtonRemove';

export default class TodoListsItem extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    todosCount: PropTypes.number.isRequired,
  };

  render() {
    const {
      id,
      name,
      todosCount,
    } = this.props;

    return (
      <li className="lists-item">
        {name}
        <span className="label label-default">
        {todosCount}
        </span>
        <ButtonDetails id={id} />
        <ButtonRemove />
      </li>
    );
  }
}
