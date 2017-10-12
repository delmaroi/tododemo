import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Field,
  reduxForm,
} from 'redux-form/immutable';
import createFormField from 'react-form-fields/lib/createFormField';
import createReduxFormField from 'react-form-fields/lib/createReduxFormField';
import {Form, FormGroup , FormControl,AlertDismissable,Glyphicon} from 'react-bootstrap'


export default class AddList extends PureComponent { // eslint-disable-line react/prefer-stateless-function

  // const onSubmit = (event) => {
  //   if (event && event.preventDefault) {
  //     event.preventDefault();
  //   }
  //
  //   if (valid) {
  //     handleSubmit();
  //   }
  // };

  render() {
    return (
      // <form onSubmit={onSubmit} noValidate>
      <form noValidate>
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
