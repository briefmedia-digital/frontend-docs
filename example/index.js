/**
 * Entry to the Javascript files
 *
 * @description This file is used to set up the entire JS for the site inluding:
 * 1. Set up any window variables
 * 2. Any pre-render logic
 */

/**
 * Import React to convert JSX, ReactDOM.render to append it to the DOM
 * Import Client component
 */
import React from 'react';
import { render } from 'react-dom';
import Client from './src/Client';

// App div to append to
const app = document.getElementById('app');

// Render when ready
render(<Client />, app);
