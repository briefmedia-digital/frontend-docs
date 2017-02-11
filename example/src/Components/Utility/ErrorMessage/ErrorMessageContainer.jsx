import React from 'react';
import { connect } from 'react-redux';
import { ErrorMessage } from '../../Molecules/Messages';


const ErrorMessageContainer = (props) => (
  <div>
    { props.errorMessage && <ErrorMessage message={ props.errorMessage }/> }
    { props.children }
  </div>
);

const mapStateToProps = (state) => {

  console.log(state);
  return {
    errorMessage: state.messages.error || '',
  };
};

export default connect(mapStateToProps)(ErrorMessageContainer);
