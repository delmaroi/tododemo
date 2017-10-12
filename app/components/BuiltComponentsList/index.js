import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const BuiltComponentsList = (props) => {
  const {
    navigationItems,
    primary,
    secondary,
    onItemClick,
  } = props;

  const listClass = classNames(
    'built-components',
    {
      'built-components--primary': primary,
      'built-components--secondary': secondary,
    },
  );

  return (
    <div className={listClass}>
      {Object.values(navigationItems).map((category) => (
        <div>
          <div className="built-components__header">{category.title}</div>

          {secondary && <div className="built-components__description">{category.description}</div>}

          <ul className="built-components__list">
            {category.entries.map((item) => (
              <li className="built-components__list__item">
                <Link
                  className="built-components__list__link"
                  to={item.url}
                  onClick={onItemClick}
                >{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

BuiltComponentsList.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  navigationItems: PropTypes.object.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

BuiltComponentsList.defaultProps = {
  primary: false,
  secondary: false,
};

export default BuiltComponentsList;
