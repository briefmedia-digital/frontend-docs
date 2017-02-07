import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Routes

// Layouts
import MainLayout from './Pages/layouts/MainLayout';

// Views
import HomePage from './Pages/views/HomePage';


/**
 * @name Routes
 *
 * @description Full routing via react-router
 */
export default () => (
  <Router history={ browserHistory }>
    <Route path="/" component={ MainLayout }>
      <IndexRoute component={ HomePage } />
    </Route>
  </Router>
);
