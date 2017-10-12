/**
*
* UserProfileForm
*
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  reduxForm,
  Field,
  formValueSelector,
} from 'redux-form/immutable';
import TextField from 'react-form-fields/lib/TextField/reduxForm';
import EmailField from 'react-form-fields/lib/EmailField/reduxForm';
import PasswordField from 'react-form-fields/lib/PasswordField/reduxForm';
import { required as requiredValidator } from 'validators/lib/required';
import { email as emailValidator } from 'validators/lib/email';
import { passwordFormat as passwordValidator } from 'validators/lib/passwordFormat';
import { oldPasswordRequired as oldPasswordRequiredValidator } from 'validators/lib/oldPasswordRequired';
import { matchToNewPassword as matchToNewPasswordValidator } from 'validators/lib/matchToNewPassword';

const selector = formValueSelector('userProfileForm');
const mapStateToProps = (state) => {
  const newPasswordValue = selector(state, 'newPassword') || '';
  const hasNewPassword = newPasswordValue.length > 0;
  return {
    hasNewPassword,
  };
};

@connect(mapStateToProps)
@reduxForm({
  form: 'userProfileForm',
})
export default class UserProfileForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    valid: PropTypes.bool.isRequired,
    invalid: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    hasNewPassword: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    const {
      handleSubmit,
      valid,
    } = this.props;

    if (event && event.preventDefault) {
      event.preventDefault();
    }

    if (valid) {
      handleSubmit();
    }
  }

  render() {
    const {
      invalid,
      pristine,
      submitting,
      error,
      hasNewPassword,
    } = this.props;

    return (
      <form
        onSubmit={this.handleFormSubmit}
        noValidate
        className="form"
      >
        <div className="msgs">
          {error &&
            <div className="msg msg--error">{error}</div>
          }
        </div>

        <Field
          name="firstName"
          type="text"
          label="First Name"
          placeholder="First Name"
          validate={[requiredValidator]}
          component={TextField}
          disabled={submitting}
        />

        <Field
          name="lastName"
          type="text"
          label="Last Name"
          placeholder="Last Name"
          validate={[requiredValidator]}
          component={TextField}
          disabled={submitting}
        />

        <Field
          name="email"
          type="text"
          label="Email"
          placeholder="Email"
          validate={[requiredValidator, emailValidator]}
          component={EmailField}
          disabled={submitting}
        />

        <Field
          name="role"
          type="text"
          label="Role"
          placeholder="Role"
          component={TextField}
          disabled
        />

        <Field
          name="newPassword"
          type="password"
          label="New Password"
          placeholder="New Password"
          validate={[passwordValidator]}
          component={PasswordField}
          disabled={submitting}
        />

        {hasNewPassword &&
          <div>
            <Field
              name="confirmNewPassword"
              type="password"
              label="Confirm New Password"
              placeholder="Confirm New Password"
              validate={[passwordValidator, matchToNewPasswordValidator]}
              component={PasswordField}
              disabled={submitting}
            />

            <Field
              name="password"
              type="password"
              label="Old Password"
              placeholder="Old Password"
              validate={[passwordValidator, oldPasswordRequiredValidator]}
              component={PasswordField}
              disabled={submitting}
            />
          </div>
        }

        <button
          className="button button--default button--block"
          type="submit"
          disabled={pristine || submitting || invalid}
        >
          {submitting ? 'submitting' : 'submit'}
        </button>
      </form>
    );
  }
}
