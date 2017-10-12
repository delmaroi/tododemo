import React, { PureComponent } from 'react';

export default class SearchTodoList extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <form>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
          />
        </div>
      </form>
    );
  }
}
