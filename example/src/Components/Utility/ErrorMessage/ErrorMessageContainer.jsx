import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { ErrorMessage } from '/src/Components/Molecules/Messages';
import { clearError } from '/src/Components/Utility/ErrorMessage/actions';


const ErrorMessageUtil = props => (
  <div>

    { props.errorMessage &&
      <ErrorMessage message={ props.errorMessage } onClick={ props.clearError } /> }

    { props.children }

  </div>
);

ErrorMessageUtil.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  clearError: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

const mapStateToProps = state => {
  return {
    errorMessage: state.messages.error || '',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearError: () => dispatch(clearError()),
  };
};


const ErrorMessageContainer = connect(mapStateToProps, mapDispatchToProps)(ErrorMessageUtil);
export { ErrorMessageUtil };
export default ErrorMessageContainer;
