import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ButtonDetails = ({ history }) => (
  <Button
    className="btn btn-default btn-sm"
    type="button"
    onClick={() => history.push('/my-new-location')}
  >
    Details
  </Button>
);


ButtonDetails.propTypes = {
  history: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(ButtonDetails);
