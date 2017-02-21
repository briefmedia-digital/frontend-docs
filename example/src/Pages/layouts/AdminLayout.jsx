import React, { Component } from 'react';
import { ErrorMessageContainer } from '/src/Components/Utility/ErrorMessage';


class AdminLayout extends Component {

  constructor(props) {

    super(props);
  }

  render() {

    return (
      <ErrorMessageContainer>
        <main className="black-80">

          <div className="mw7 center pb4 ph4 ph0-l" style={{ minHeight: '75vh' }}>
            { this.props.children }
          </div>

        </main>
      </ErrorMessageContainer>
    );
  }
};

export default AdminLayout;
