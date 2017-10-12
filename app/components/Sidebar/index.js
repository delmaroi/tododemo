import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <aside className="app-sidebar">
        <a href="#close" className="app-sidebar-close">
          <i className="icon-cancel" />
        </a>
        <h4 className="app-sidebar-logo">React Demo</h4>
        <h5 className="app-sidebar-section_header">Main navigation</h5>
        <ul className="app-sidebar-nav">
          <li className="app-sidebar-nav-item">
            <Link to="/" className="app-sidebar-nav-link">Home</Link>
          </li>
          <li className="app-sidebar-nav-item">
            <Link to="/sign-in" className="app-sidebar-nav-link">Sign In</Link>
          </li>
          <li className="app-sidebar-nav-item">
            <Link to="/sign-up" className="app-sidebar-nav-link">Sign Up</Link>
          </li>
          <li className="app-sidebar-nav-item">
            <Link to="/sign-out" className="app-sidebar-nav-link">Sign Out</Link>
          </li>
          <li className="app-sidebar-nav-item">
            <Link to="/request-password-reset" className="app-sidebar-nav-link">Forgot password?</Link>
          </li>
          <li className="app-sidebar-nav-item">
            <Link to="/home" className="app-sidebar-nav-link">Page after login</Link>
          </li>
          <li className="app-sidebar-nav-item">
            <Link to="/only-for-admins" className="app-sidebar-nav-link">Page only for admins</Link>
          </li>
          <li className="app-sidebar-nav-item">
            <Link to="/only-for-users-or-admins" className="app-sidebar-nav-link">Page only for users with specific roles</Link>
          </li>
          <li className="app-sidebar-nav-item">
            <Link to="/datepicker-example-page" className="app-sidebar-nav-link">Datepickers</Link>
          </li>
          <li className="app-sidebar-nav-item">
            <Link to="/places-autocomplete-example-page" className="app-sidebar-nav-link">Places Autocomplete</Link>
          </li>
          <li className="app-sidebar-nav-item">
            <Link to="/infinite-scroll" className="app-sidebar-nav-link">Infinite Scroll</Link>
          </li>
          <li className="app-sidebar-nav-item">
            <Link to="/payment" className="app-sidebar-nav-link">Stripe payments</Link>
          </li>
          <li className="app-sidebar-nav-item">
            <Link to="/modals" className="app-sidebar-nav-link">Modals</Link>
          </li>
          <li className="app-sidebar-nav-item">
            <Link to="/user-profile" className="app-sidebar-nav-link">User Profile</Link>
          </li>
          <li className="app-sidebar-nav-item">
            <Link to="/example-survey" className="app-sidebar-nav-link">Example survey</Link>
          </li>
          <li className="app-sidebar-nav-item">
            <Link to="/example-table" className="app-sidebar-nav-link">Example table</Link>
          </li>
          <li className="app-sidebar-nav-item">
            <Link to="/chat/2" className="app-sidebar-nav-link">Chat</Link>
          </li>
          <li className="app-sidebar-nav-item">
            <Link to="/mentions" className="app-sidebar-nav-link">React Mentions</Link>
          </li>
        </ul>
        <h5 className="app-sidebar-section_header">Styleguide</h5>
        <ul className="app-sidebar-nav">
          <li className="app-sidebar-nav-item">
            <Link to="/typography" className="app-sidebar-nav-link">Typography</Link>
          </li>
          <li className="app-sidebar-nav-item">
            <Link to="/forms" className="app-sidebar-nav-link">Forms</Link>
          </li>
          <li className="app-sidebar-nav-item">
            <Link to="/register" className="app-sidebar-nav-link">Register</Link>
          </li>
          <li className="app-sidebar-nav-item">
            <Link to="/login" className="app-sidebar-nav-link">Login</Link>
          </li>
        </ul>
      </aside>
    );
  }
}
