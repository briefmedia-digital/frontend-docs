import React, { PropTypes } from 'react';


const Card = (props) => (
  <section className="tc pa3 pa5-ns">
    <article className="hide-child relative ba b--black-20 mw5 center">
      <img
        src={ props.avatar_url }
        className="db"
        alt={ props.name} />
      <div className="pa2 bt b--black-20">
        <a className="f6 db link dark-blue hover-blue" href={ `https://www.github.com/${props.name}`}>{ props.name }</a>
        <p className="f6 gray mv1">{ props.login }</p>
        <p className="f6 gray mv1">Public Repos: { props.public_repos }</p>
      </div>
      <a className="child absolute top-1 right-1 ba bw1 black-40 grow no-underline br-100 w1 h1 pa2 lh-solid b" href="#">×</a>
    </article>
  </section>
);


Card.propTypes = {
  name: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
};

export default Card;
