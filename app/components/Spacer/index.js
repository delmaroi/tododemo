import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Spacer = (props) => {
  const { size } = props;

  const spacerClass = classNames(
    'sg__spacer',
    {
      [`sg__spacer--${size}`]: size,
    },
  );

  return (
    <div className={spacerClass}></div>
  );
};

Spacer.propTypes = {
  size: PropTypes.string,
};

Spacer.defaultProps = {
  size: undefined,
};

export default Spacer;
