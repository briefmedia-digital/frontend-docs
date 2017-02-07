/**
 * @name Main Layout
 *
 * @description This is main layout for the user-facing frontend
 */
import React, { Component, PropTypes } from 'react';

class MainLayout extends Component {

  constructor(props) {

    super(props);
  }

  render() {

    return (
      <main>
        <header>Header Here</header>
        { this.props.children }
        <footer>Footer Here</footer>
      </main>
    );
  }
};

export default MainLayout;
