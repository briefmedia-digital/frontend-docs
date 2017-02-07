/**
 * @name Main Layout
 *
 * @description This is main layout for the user-facing frontend
 */
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


class MainLayout extends Component {

  constructor(props) {

    super(props);
  }

  render() {

    return (
      <main className="black-80">

<header className="bg-white tc pv4 avenir mw7 center">
  <h1 className="mt2 mb0 baskerville i fw1 f1">Github Profiler</h1>
  <h2 className="mt2 mb0 f6 fw4 ttu tracked">Example for Brief Media frontend</h2>
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
</header>

				<div className="mw7 center pb4 ph4 ph0-l" style={{ minHeight: '75vh' }}>
          { this.props.children }
				</div>

<footer className="bg-near-black white-80 pv5 ph0 ph4-l">
	<p className="f6 mw7 center">
		©2017 Your Company LLC, Inc.
	</p>
</footer>


      </main>
    );
  }
};

export default MainLayout;
