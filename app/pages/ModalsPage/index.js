/* @flow */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bind } from 'decko';
import {
  ReduxModal,
  modalOpenAction,
} from 'redux-modal';
import {
  PrivacyPolicyModal,
  TermsOfUseModal,
} from 'components/Modals';

const mapDispatchToProps = {
  onOpenClick: modalOpenAction,
};

@connect(null, mapDispatchToProps)
export default class ModalsPage extends PureComponent {
  static propTypes = {
    onOpenClick: PropTypes.func.isRequired,
  };

  @bind
  handleOpenModal(event) {
    if (!event || !event.target) {
      return;
    }

    const {
      onOpenClick,
    } = this.props;
    const name = event.target.value;

    onOpenClick(name);
  }

  render() {
    return (
      <section className="app-content-inner">
        <h1>Modals example!</h1>

        <ul>
          <li><button name="modal" value="PrivacyPolicyModal" onClick={this.handleOpenModal}>Privacy policy modal</button></li>
          <li><button name="modal" value="TermsOfUseModal" onClick={this.handleOpenModal}>Terms of use modal</button></li>
        </ul>

        <ReduxModal
          component={PrivacyPolicyModal}
          name="PrivacyPolicyModal"
          contentLable="Privacy policy"
          customProp="hello!"
        />

        <ReduxModal
          component={TermsOfUseModal}
          contentLabel="Terms of use"
          name="TermsOfUseModal"
        />
      </section>
    );
  }
}
