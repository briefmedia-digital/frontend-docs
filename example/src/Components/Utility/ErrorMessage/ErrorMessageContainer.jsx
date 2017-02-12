import React from 'react';
import { connect } from 'react-redux';
import { ErrorMessage } from '../../Molecules/Messages';
import { clearError } from '../../Utility/ErrorMessage/actions';


const ErrorMessageContainer = (props) => (
  <div>

    { props.errorMessage &&
      <ErrorMessage message={ props.errorMessage } onClick={ props.clearError } /> }

    { props.children }

  </div>
);

const mapStateToProps = (state) => {

  return {
    errorMessage: state.messages.error || '',
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    clearError: () => dispatch(clearError()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorMessageContainer);
