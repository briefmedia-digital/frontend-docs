import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Routes

// Layouts
import MainLayout from './Pages/layouts/MainLayout';

// Views
import HomePage from './Pages/views/HomePage';
import SearchPage from './Pages/views/SearchPage';
import AboutPage from './Pages/views/AboutPage';

/**
 * @name Routes
 *
 * @description Full routing via react-router
 */
export default () => (
  <Router history={ browserHistory }>
    <Route path="/" component={ MainLayout }>
      <IndexRoute component={ HomePage } />
			<Route path ="/search" component={ SearchPage } />
			<Route path="/about" component={ AboutPage } />
    </Route>
  </Router>
);
