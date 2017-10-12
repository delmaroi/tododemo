import React, { PureComponent } from 'react';
import Item from '../Item';

export default class Lists extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ul className="list-group">
        <Item />
        <p className="empty">
          List is empty
        </p>
      </ul>
    );
  }
}
