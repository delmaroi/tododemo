import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TabsNav from '../TabsNav';
import Icon from '../Icon';

const BuiltTeamComments = (props) => {
  const {
    isVisible,
    handleToggleTeamComments,
  } = props;

  const teamCommentsClass = classNames(
    'built-team-comments',
    {
      'built-team-comments--is-visible': isVisible,
    },
  );

  return (
    <aside className={teamCommentsClass}>
      <div className="built-team-comments__inner">
        <button
          className="built-team-comments__close-button"
          onClick={handleToggleTeamComments}
        >
          <Icon name="close" />
        </button>
        <div className="built-team-comments__header">Team Comment</div>
        <div className="built-team-comments__component-name">Form</div>
        <TabsNav hasBorder />
        <div className="built-team-comments__content">
          <p>According to the research firm Frost & Sullivan, the estimated size of the North American used test and</p>
          <ul>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

BuiltTeamComments.propTypes = {
  isVisible: PropTypes.bool,
  handleToggleTeamComments: PropTypes.func,
};

BuiltTeamComments.defaultProps = {
  isVisible: false,
  handleToggleTeamComments: undefined,
};

export default BuiltTeamComments;
