/**
*
* PaymentSplitForm
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form/immutable';
import compose from 'recompose/compose';
import { injectStripe } from 'react-stripe-elements';
import StripeField from 'redux-form-stripe-fields/lib/StripeField';

const PaymentSplitForm = (props) => {
  const {
    handleSubmit,
    valid,
    invalid,
    pristine,
    stripe,
    submitting,
  } = props;

  const onSubmit = (values, dispatch) => {
    if (valid) {
      return stripe
        .createToken({ type: 'card' })
        .then((stripeResponse) => props.onSubmit(values, dispatch, stripeResponse));
    }

    return false;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <StripeField
        type="cardNumber"
        name="cardNumber"
      />
      <StripeField
        type="cardExpiry"
        name="cardExpiry"
      />
      <StripeField
        type="cardCVC"
        name="cardCVC"
      />
      <StripeField
        type="cardPostalCode"
        name="cardPostalCode"
      />

      <button
        className="button button--default button--block"
        type="submit"
        disabled={pristine || submitting || invalid}
      >
        {submitting ? 'submitting' : 'submit'}
      </button>
    </form>
  );
};

PaymentSplitForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  valid: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
  stripe: PropTypes.object.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default compose(
  injectStripe,
  reduxForm({
    form: 'paymentSplitForm',
  }),
)(PaymentSplitForm);
