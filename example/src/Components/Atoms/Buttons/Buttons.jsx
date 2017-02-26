import React, { PropTypes } from 'react';


/**
 * Flat Button
 *
 * @description The main button used. Characterized by flat color
 * and a transition on hover to a darker color
 *
 * @property {String} props.value is the text inside the button
 */
export const FlatButton = props => {

  const flatButtonClasses = `f6 f5-l button-reset fl pv3 tc
  bn bg-animate bg-black-70 hover-bg-black white pointer
  w-100 w-25-m w-20-l br2-ns br--right-ns`;

  return (
    <input className={ flatButtonClasses } type="submit" value={ props.value } />
  );
};

FlatButton.propTypes = {
  value: PropTypes.string.isRequired,
};
