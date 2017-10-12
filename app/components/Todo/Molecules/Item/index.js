import React, { PureComponent } from 'react';
import ButtonDetails from 'components/Todo/Atoms/ButtonDetails';
import ButtonRemove from 'components/Todo/Atoms/ButtonRemove';

export default class Item extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <li className="lists-item">
        title
        <span className="label label-default">
          0
        </span>
        <ButtonDetails />
        <ButtonRemove />
      </li>
    );
  }
}
