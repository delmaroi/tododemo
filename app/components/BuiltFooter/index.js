import React from 'react';
import PropTypes from 'prop-types';
import logo from 'images/built-logo-footer.svg';

const BuiltFooter = (props) => {
  const { isVisible } = props;

  if (!isVisible) {
    return null;
  }

  return (
    <footer className="built-footer">
      <img src={logo} alt="" className="built-footer__logo" />

      <div className="built-footer__text">
        Built By <b>Arabella</b>
      </div>
    </footer>
  );
};

BuiltFooter.propTypes = {
  isVisible: PropTypes.bool,
};

BuiltFooter.defaultProps = {
  isVisible: true,
};

export default BuiltFooter;
