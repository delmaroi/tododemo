import React from 'react';
import PropTypes from 'prop-types';

const PrivacyPolicyModal = (props) => {
  const {
    customProp,
    onClose,
  } = props;

  return (
    <div className="modal-inner">
      <div className="modal-header">Privacy policy</div>
      <div className="modal-content">
        <p>customProp = {customProp}</p>
        <p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis.</p>
      </div>
      <div className="modal-footer">
        <button className="button" onClick={onClose}>Ok, got it!</button>
      </div>
    </div>
  );
};

PrivacyPolicyModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  customProp: PropTypes.string.isRequired,
};

export default PrivacyPolicyModal;
