import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const BuiltOverlay = (props) => {
  const {
    isVisible,
    onClick,
  } = props;

  const overlayClass = classNames(
    'built-overlay',
    {
      'built-overlay--is-visible': isVisible,
    },
  );

  return (
    <div
      role="button"
      tabIndex={0}
      className={overlayClass}
      onClick={onClick}
    >
    </div>
  );
};

BuiltOverlay.propTypes = {
  isVisible: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

BuiltOverlay.defaultProps = {
  isVisible: false,
};

export default BuiltOverlay;
