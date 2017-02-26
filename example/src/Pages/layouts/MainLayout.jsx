/**
 * @name Main Layout
 *
 * @description This is main layout for the user-facing frontend
 */
import React, { Component, PropTypes } from 'react';
import { SiteHeader } from '/src/Components/Organisms/SiteHeader';
import { ErrorMessageContainer } from '/src/Components/Utility/ErrorMessage';


class MainLayout extends Component {

  constructor(props) {

    super(props);
  }

  render() {

    return (
      <ErrorMessageContainer>
        <main className="black-80">
          <SiteHeader />

          <div className="mw7 center pb4 ph4 ph0-l" style={ { minHeight: '75vh' } }>
            { this.props.children }
          </div>

          <footer className="bg-near-black white-80 pv5 ph0 ph4-l">
            <p className="f6 mw7 center">
              ©2017 Your Company LLC, Inc.
            </p>
          </footer>

        </main>
      </ErrorMessageContainer>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
