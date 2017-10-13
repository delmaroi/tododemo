import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ButtonDetails = ({ history, id }) => (
  <Button
    className="btn btn-default btn-sm"
    type="button"
    onClick={() => history.push(`/details/${id}`)}
  >
    Details
  </Button>
);


ButtonDetails.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
};

export default withRouter(ButtonDetails);
