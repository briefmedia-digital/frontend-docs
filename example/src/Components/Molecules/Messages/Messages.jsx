import React from 'react';


export const ErrorMessage = (props) => (
  <div className="mw7 center mt3 ba bw1 pa3 b red bg-washed-yellow" onClick={ props.onClick }>
    { props.message }
  </div>
);
