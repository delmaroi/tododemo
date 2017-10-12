import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

const ButtonRemove = ({ id }) => (
  <Button
    className="btn btn-danger btn-sm"
    type="button"
  >
    <span className="glyphicon glyphicon-remove" />
  </Button>
);

ButtonRemove.propTypes = {
  id: PropTypes.integer.isRequired,
};

export default ButtonRemove;
