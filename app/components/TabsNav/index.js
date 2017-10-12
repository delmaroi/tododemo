import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TabsNav = (props) => {
  const { hasBorder } = props;

  const tabsClass = classNames(
    'tabs__nav',
    {
      'tabs__nav--has-border': hasBorder,
    },
  );

  return (
    <ul className={tabsClass}>
      <li className="tabs__nav__item tabs__nav__item--is-active">
        <a href="#tab1" className="tabs__nav__link">Tab 1</a>
      </li>
      <li className="tabs__nav__item">
        <a href="#tab2" className="tabs__nav__link">Tab 2</a>
      </li>
    </ul>
  );
};

TabsNav.propTypes = {
  hasBorder: PropTypes.bool,
};

TabsNav.defaultProps = {
  hasBorder: false,
};

export default TabsNav;
