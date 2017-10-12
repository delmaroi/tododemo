import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FormItem = (props) => {
  const {
    className,
    children,
    style,
    hasError,
    disabled,
  } = props;

  const itemClass = classNames(
    'form__item',
    className,
    {
      'form__item--has-error': hasError,
      'form__item--disabled': disabled,
    },
  );

  return (
    <div
      className={itemClass}
      style={style}
    >
      {children}
    </div>
  );
};

FormItem.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
  hasError: PropTypes.bool,
  disabled: PropTypes.bool,
};

FormItem.defaultProps = {
  style: {},
  className: undefined,
  hasError: false,
  disabled: false,
};

export default FormItem;
