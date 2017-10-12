import React from 'react';
import PropTypes from 'prop-types';

const TermsOfUseModal = (props) => {
  const {
    onClose,
  } = props;

  return (
    <div className="modal-inner">
      <div className="modal-header">Terms of use</div>
      <div className="modal-content">
        <p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis.</p>
      </div>
      <div className="modal-footer">
        <button className="button" onClick={onClose}>Ok, got it!</button>
      </div>
    </div>
  );
};

TermsOfUseModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default TermsOfUseModal;
