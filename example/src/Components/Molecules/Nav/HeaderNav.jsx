import React from 'react';
import { Link } from 'react-router';

/**
 * Header Navigation
 *
 * @description Main navigation for the site, present in the header
 */
export default () => (
  <nav className="bt bb tc mt4">

    <Link
      className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l"
      to="/">Home</Link>

    <Link
      className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l"
      to="/search">Search</Link>

    <Link
      className="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l"
      to="/about">About</Link>

  </nav>
);

