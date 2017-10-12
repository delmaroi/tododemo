import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Radio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };
  }

  render() {
    const {
      id,
      children,
      disabled,
      hasError,
      name,
      value,
      ...inputProps
    } = this.props;

    const radioClass = classNames(
      'form__radio',
      {
        'form__radio--has-error': hasError,
      },
    );

    return (
      <div className="form__radio-wrap">
        <input
          type="radio"
          id={id}
          className={radioClass}
          disabled={disabled}
          name={name}
          value={value}
          {...inputProps}
        />
        <label
          htmlFor={id}
          className="form__radio-label"
        >
          {children}
        </label>
      </div>
    );
  }
}

Radio.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  hasError: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

Radio.defaultProps = {
  disabled: false,
  hasError: false,
};

export default Radio;
