import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Routes

// Layouts
import MainLayout from './Pages/layouts/MainLayout';
import AdminLayout from './Pages/layouts/AdminLayout';

// Views
import HomePage from './Pages/views/HomePage';
import SearchPage from './Pages/views/SearchPage';
import AboutPage from './Pages/views/AboutPage';
import AdminHomePage from './Pages/views/AdminHomePage';

/**
 * @name Routes
 *
 * @description Full routing via react-router
 */
export default () => (
  <Router history={ hashHistory }>
    <Route path="/" component={ MainLayout }>
      <IndexRoute component={ HomePage } />
			<Route path ="/search" component={ SearchPage } />
			<Route path="/about" component={ AboutPage } />
    </Route>
    <Route path="/admin" component={ AdminLayout }>
      <IndexRoute component={ AdminHomePage } />
    </Route>
  </Router>
);
