import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import logoImg from 'images/built-logo-header.svg';
import FormInput from '../../components/FormInput';
import Icon from '../../components/Icon';
import FormInputButton from '../../components/FormInputButton';
import FormInputIcon from '../../components/FormInputIcon';
import TabsNav from '../TabsNav';

class BuiltHeader extends PureComponent {
  renderLogo() {
    const { showLogo } = this.props;

    if (!showLogo) {
      return null;
    }

    return (
      <img src={logoImg} alt="" className="built-header__logo" />
    );
  }

  renderSearch() {
    const { showSearch } = this.props;

    if (!showSearch) {
      return null;
    }

    const searchButton = (
      <FormInputButton>
        <FormInputIcon name="search" />
      </FormInputButton>
    );

    return (
      <div className="built-header__search">
        <FormInput
          type="text"
          placeholder="Search component"
          suffix={searchButton}
        />
      </div>
    );
  }

  renderNavigation() {
    const {
      showNavigation,
      handleToggleSidebar,
    } = this.props;

    if (!showNavigation) {
      return null;
    }

    return (
      <button
        className="built-header__nav-icon"
        onClick={handleToggleSidebar}
      >
        <Icon name="nav" />
      </button>
    );
  }

  renderPageName() {
    const { pageName } = this.props;

    if (!pageName) {
      return null;
    }

    return (
      <div className="built-header__page-name">{pageName}</div>
    );
  }

  renderCategoryName() {
    const { categoryName } = this.props;

    if (!categoryName) {
      return null;
    }

    return (
      <div className="built-header__category-name">{categoryName}</div>
    );
  }

  renderRightIcons() {
    const {
      showRightIcons,
      handleToggleTeamComments,
      toggleCommentsIsActive,
    } = this.props;

    if (!showRightIcons) {
      return null;
    }

    const toggleCommentsClass = classNames(
      'built-header__icon-button',
      {
        'built-header__icon-button--is-active': toggleCommentsIsActive,
      },
    );

    return (
      <div className="built-header__icons-wrap">
        <button
          className={toggleCommentsClass}
          onClick={handleToggleTeamComments}
        >
          <Icon name="message" />
        </button>
        {/* <button className="built-header__icon-button">
          <Icon name="source" />
        </button> */}
      </div>
    );
  }

  renderTabs() {
    const { showTabs } = this.props;

    if (!showTabs) {
      return null;
    }

    return (
      <TabsNav />
    );
  }

  render() {
    return (
      <header className="built-header">
        <div className="built-header__left">
          {this.renderLogo()}
          {this.renderNavigation()}
          {this.renderCategoryName()}
          {this.renderPageName()}
        </div>
        <div className="built-header__center">
          {this.renderTabs()}
        </div>
        <div className="built-header__right">
          {this.renderSearch()}
          {this.renderRightIcons()}
        </div>
      </header>
    );
  }
}

BuiltHeader.propTypes = {
  showSearch: PropTypes.bool,
  showLogo: PropTypes.bool,
  showRightIcons: PropTypes.bool,
  showNavigation: PropTypes.bool,
  showTabs: PropTypes.bool,
  categoryName: PropTypes.string,
  pageName: PropTypes.string,
  handleToggleSidebar: PropTypes.func,
  handleToggleTeamComments: PropTypes.func,
  toggleCommentsIsActive: PropTypes.bool,
};

BuiltHeader.defaultProps = {
  showSearch: true,
  showLogo: true,
  showRightIcons: false,
  showNavigation: false,
  showTabs: false,
  categoryName: undefined,
  pageName: undefined,
  handleToggleSidebar: undefined,
  handleToggleTeamComments: undefined,
  toggleCommentsIsActive: false,
};

export default BuiltHeader;
