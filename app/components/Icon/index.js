import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Icon = (props) => {
  const {
    name,
    style,
    className,
  } = props;

  const iconClass = classNames(
    className,
    {
      [`icon--${name}`]: name,
    },
  );

  return (
    <i
      className={iconClass}
      style={style}
    />
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  style: PropTypes.object,
};

Icon.defaultProps = {
  className: undefined,
  style: {},
};

export default Icon;
