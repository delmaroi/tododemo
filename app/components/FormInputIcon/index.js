import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

const FormInputIcon = (props) => (
  <Icon
    className="form__input-icon"
    name={props.name}
  />
);

FormInputIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormInputIcon;
