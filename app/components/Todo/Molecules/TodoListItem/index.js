import React, { PureComponent } from 'react';
import ButtonRemove from 'components/Todo/Atoms/ButtonRemove';

export default class TodoListItem extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <li className="lists-item">
        title
        <span className="label label-default">
          0
        </span>
        <ButtonRemove />
      </li>
    );
  }
}
