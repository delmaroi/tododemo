import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class FormInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPassword: false,
      value: props.value,
    };

    this.toggleShowPassword = this.toggleShowPassword.bind(this);
    this.getInputType = this.getInputType.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getInputType() {
    const {
      type,
      enableShowPassword,
    } = this.props;

    if (!enableShowPassword) {
      return type;
    }

    if (this.state.showPassword) {
      return 'text';
    }

    return 'password';
  }

  toggleShowPassword() {
    this.setState((state) => ({
      showPassword: !state.showPassword,
    }));
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  renderToggleShowPassword() {
    const { enableShowPassword } = this.props;

    const toggleClass = classNames(
      'form__toggle-show-password',
      {
        'form__toggle-show-password--password-visible': this.state.showPassword,
      },
    );

    const text = this.state.showPassword ? 'Hide' : 'Show';

    if (!enableShowPassword || this.state.value === '') {
      return null;
    }

    return (
      <button
        className={toggleClass}
        onClick={this.toggleShowPassword}
      >
        {text}
      </button>
    );
  }

  renderPrefix() {
    const { prefix } = this.props;
    if (!prefix) {
      return null;
    }

    return (
      <div className="form__input__prefix">
        {prefix}
      </div>
    );
  }

  renderSuffix() {
    const { suffix } = this.props;
    if (!suffix) {
      return null;
    }

    return (
      <div className="form__input__suffix">
        {suffix}
      </div>
    );
  }

  render() {
    const {
      placeholder,
      disabled,
      prefix,
      suffix,
    } = this.props;

    const inputClass = classNames(
      'form__input',
      {
        'form__input--has-suffix': suffix,
        'form__input--has-prefix': prefix,
      },
    );

    return (
      <div className="form__input-wrap">
        {this.renderPrefix()}
        <input
          className={inputClass}
          type={this.getInputType()}
          placeholder={placeholder}
          disabled={disabled}
          value={this.state.value}
          onChange={this.handleChange}
        />
        {this.renderToggleShowPassword()}
        {this.renderSuffix()}
      </div>
    );
  }
}

FormInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  enableShowPassword: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
};

FormInput.defaultProps = {
  placeholder: null,
  type: 'text',
  enableShowPassword: false,
  disabled: false,
  value: '',
  prefix: undefined,
  suffix: undefined,
};

export default FormInput;
