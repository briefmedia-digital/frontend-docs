/**
 * Client entry
 *
 * This is the wrapper component for the entire client frontend
 */

// Import React as well as React.Component and React.PropTypes
import React, { Component, PropTypes } from 'react';

// Import routes
import Routes from './routes';

/**
 * class Client
 *
 * @description React component wrapper for the frontend
 */
class Client extends Component {

  constructor(props) {

    super(props);
  }

  render() {

    return (
      <Routes />
    );
  }
}

// Export the client app
export default Client;
