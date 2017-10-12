import React, { PureComponent } from 'react';

export default class Header extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <header className="app-header">
        <a href="#openSidebar" className="app-header-open_sidebar">
          <i className="icon-menu"></i>
        </a>
        <h4 className="app-header-page_title">Current Page Name</h4>
      </header>
    );
  }
}
