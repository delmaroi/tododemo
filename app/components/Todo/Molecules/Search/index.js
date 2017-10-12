import React, { PureComponent } from 'react';

export default class Search extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
        />
      </div>
    );
  }
}
