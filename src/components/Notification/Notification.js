import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ messeage }) => <h2>{messeage}</h2>;

Notification.propTypes = {
  messeage: PropTypes.string,
};

export default Notification;
