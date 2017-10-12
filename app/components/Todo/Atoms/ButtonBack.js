import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ButtonBack = ({ history }) => (
  <Button
    className="todos__back btn btn-default btn-sm"
    type="button"
    onClick={() => history.push('/')}
  >
    <span className="glyphicon glyphicon-arrow-left" />
    Back
  </Button>
);


ButtonBack.propTypes = {
  history: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(ButtonBack);
