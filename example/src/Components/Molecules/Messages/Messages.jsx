import React, { PropTypes } from 'react';


export const ErrorMessage = props => (
  <input
    className="mw7 center mt3 ba bw1 pa3 b red bg-washed-yellow"
    onClick={ props.onClick }
    type="submit"
  >
    { props.message }
  </input>
);

ErrorMessage.propTypes = {
  onClick: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};
