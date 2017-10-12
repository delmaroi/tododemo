import React, { PureComponent } from 'react';

export default class AddTodoListItem extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <form>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Add Todo"
          />
          <span className="input-group-btn">
            <button
              className="btn btn-default"
            >
              <span
                className="glyphicon"
              />
              Add
            </button>
          </span>
        </div>
      </form>
    );
  }
}
