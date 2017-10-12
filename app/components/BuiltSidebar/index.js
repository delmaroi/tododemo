import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import logoImg from 'images/built-logo-footer.svg';
import TabsNav from '../TabsNav';
import BuiltComponentsList from '../BuiltComponentsList';

const BuiltSidebar = (props) => {
  const {
    isVisible,
    navigationItems,
    onItemClick,
  } = props;

  const sidebarClass = classNames(
    'built-sidebar',
    {
      'built-sidebar--is-visible': isVisible,
    },
  );

  return (
    <aside className={sidebarClass}>
      <div className="built-sidebar__logo">
        <img src={logoImg} alt="Built" />
      </div>

      <TabsNav hasBorder />

      <BuiltComponentsList
        primary
        navigationItems={navigationItems}
        onItemClick={onItemClick}
      />

    </aside>
  );
};

BuiltSidebar.propTypes = {
  isVisible: PropTypes.bool,
  navigationItems: PropTypes.object.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

BuiltSidebar.defaultProps = {
  isVisible: false,
};

export default BuiltSidebar;
