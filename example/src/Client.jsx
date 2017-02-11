/**
 * Client entry
 *
 * This is the wrapper component for the entire client frontend
 */

// Import React as well as React.Component and React.PropTypes
import React, { Component } from 'react';

// Import routes and configureStore
import Routes from './routes';
import configureStore from './store';

// Import Redux
import { Provider } from 'react-redux';
const initState = {
  githubUser: {},
  messages: {
    error: '',
  },
};
const store = configureStore(initState);

// Import Utilities
import { ErrorMessageContainer } from './Components/Utility/ErrorMessage';

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
      <Provider store={ store }>
        <ErrorMessageContainer>
          <Routes />
        </ErrorMessageContainer>
      </Provider>
    );
  }
}

// Export the client app
export default Client;
