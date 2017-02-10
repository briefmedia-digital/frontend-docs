import React, { PropTypes } from 'react';


const Profile = (props) => (
  <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
    <div className="tc">
      <h1 className="f3 mb2">{ props.name }</h1>
      <h2 className="f5 fw4 gray mt0">{ props.login }</h2>
      <img
        src={ props.avatar_url }
        className="br-100 h4 w4 dib ba b--black-05 pa2"
        title={ props.login } />
    </div>
  </article>
);

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
};
