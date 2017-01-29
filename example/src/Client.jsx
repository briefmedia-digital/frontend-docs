/**
 * Client entry
 *
 * This is the wrapper component for the entire client frontend
 */

// Import React as well as React.Component and React.PropTypes
import React, { Component, PropTypes } from 'react';

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
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

// Export the client app
export default Client;
