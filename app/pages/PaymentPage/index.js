/*
 *
 * PaymentPage
 *
 */

import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import PaymentForm from 'forms/PaymentForm';
import PaymentSplitForm from 'forms/PaymentSplitForm';
import { Elements } from 'react-stripe-elements';
import { SubmissionError } from 'redux-form/immutable';
import { bind } from 'decko';

export default class PaymentPage extends PureComponent {
  state = {
    randomishInt: 0,
  };

  @bind
  handleSubmit(values, dispatch, stripeResponse) { // eslint-disable-line no-unused-vars
    const { randomishInt } = this.state;

    // TODO: No stripe or any kind of payments endpoint in demo yet so we're faking for now :o
    return new Promise((resolve, reject) => {
      if (randomishInt === 0) {
        this.setState({ randomishInt: 1 });
        reject({
          cardNumber: 'Stripe token error',
          card: 'Stripe token error',
        });
      } else {
        this.setState({ randomishInt: 0 });
        resolve();
      }
    }).catch((error) => {
      throw new SubmissionError(error);
    });
  }

  render() {
    return (
      <div className="app-content-inner">
        <Helmet
          title="PaymentPage"
          meta={[
            { name: 'description', content: 'Description of PaymentPage' },
          ]}
        />

        <div className="panel">
          <h4>Single stripe element form</h4>
          <hr />
          <Elements>
            <PaymentForm
              onSubmit={this.handleSubmit}
            />
          </Elements>
        </div>

        <div className="space-normal"></div>

        <div className="panel">
          <h4>Multiple stripe elements form</h4>
          <hr />
          <Elements>
            <PaymentSplitForm
              onSubmit={this.handleSubmit}
            />
          </Elements>
        </div>
      </div>
    );
  }
}
