import React from 'react';
import PropTypes from 'prop-types';

const FormInputButton = (props) => {
  const {
    onClick,
    disabled,
    type,
    children,
  } = props;
  return (
    <button
      className="form__input-button"
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};


FormInputButton.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

FormInputButton.defaultProps = {
  onClick: undefined,
  type: 'button',
  disabled: false,
};

export default FormInputButton;
