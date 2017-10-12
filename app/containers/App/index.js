import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import classNames from 'classnames';
import { selectBuiltNavigation } from 'built/selectors';
import BuiltHeader from '../../components/BuiltHeader';
import BuiltSidebar from '../../components/BuiltSidebar';
import BuiltOverlay from '../../components/BuiltOverlay';
import BuiltTeamComments from '../../components/BuiltTeamComments';

const mapStateToProps = createStructuredSelector({
  builtNavigation: selectBuiltNavigation,
});

@connect(mapStateToProps)
export default class App extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    builtNavigation: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    // TODO: Use redux instead of state
    this.state = {
      showSidebar: false,
      showTeamComments: false,
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.toggleTeamComments = this.toggleTeamComments.bind(this);
  }

  toggleSidebar() {
    this.setState((state) => ({
      showSidebar: !state.showSidebar,
    }));
  }

  toggleTeamComments() {
    this.setState((state) => ({
      showTeamComments: !state.showTeamComments,
    }));
  }

  render() {
    const appClass = classNames(
      'built-app',
      {
        'built-app--blured': this.state.showSidebar,
      },
    );

    return (
      <div className="sg__overlay">
        <BuiltOverlay
          isVisible={this.state.showSidebar}
          onClick={this.toggleSidebar}
        />

        <BuiltSidebar
          isVisible={this.state.showSidebar}
          navigationItems={this.props.builtNavigation}
          onItemClick={this.toggleSidebar}
        />

        <div className={appClass}>
          <BuiltHeader
            showLogo={false}
            categoryName="App"
            pageName="Tabs"
            showSearch={false}
            showRightIcons
            showTabs={false}
            showNavigation
            handleToggleSidebar={this.toggleSidebar}
            handleToggleTeamComments={this.toggleTeamComments}
            toggleCommentsIsActive={this.state.showTeamComments}
          />
          <div className="built-app__main">
            {this.props.children}

            <BuiltTeamComments
              isVisible={this.state.showTeamComments}
              handleToggleTeamComments={this.toggleTeamComments}
            />
          </div>
        </div>
      </div>
    );
  }
}
