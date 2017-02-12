import React, { PropTypes } from 'react';


const Card = (props) => (
  <section className="tc pt3 pt5-ns">
    <article className="relative ba b--black-20 mw12 center">
      <img
        src={ props.avatar_url }
        className="db"
        alt={ props.name} />
      <div className="pa2 bt b--black-20">
        <a className="f6 db link dark-blue hover-blue" href={ `https://www.github.com/${props.name}`}>{ props.name }</a>
        <p className="f6 gray mv1">{ props.login }</p>
        <p className="f6 gray mv1">Public Repos: { props.public_repos }</p>
      </div>
    </article>
  </section>
);


Card.propTypes = {
  name: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
};

export default Card;
