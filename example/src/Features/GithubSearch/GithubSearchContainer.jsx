import React, { Component } from 'react';
import { SearchForm } from '/src/Components/Organisms/SearchForm';
import { connect } from 'react-redux';
import { githubFetchUser } from './actions';
import { Card } from '/src/Components/Molecules/Card';



const Repos = (props) => {

  const repos = props.repos.slice(0, 8).map(repo => {
    return (
      <li
        key={ repo.id }
        className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
          <div className="pl3 flex-auto">
            <a href={ repo.html_url } className="f6 link blue hover-dark-gray">{ repo.name }</a>
          </div>
          <div>
            <span className="f6 db black-70">Issues: { repo.open_issues }</span>
            <span className="f6 db black-70">Forks: { repo.forks }</span>
          </div>
      </li>
    );
  })

  return (
    <ul className="list">
      <li><h3>Repositories</h3></li>
      { repos }
    </ul>
  );
};

const GithubSearchContainer = (props) => (


  <div>
    <SearchForm handleSubmit={ props.fetchUser } />
    <div className="mw12 center">
      <div className="cf">
        <div className="fl w-100 w-50-ns pa2">
          { !props.isFetching && props.profile.name && <Card { ...props.profile } /> }
        </div>
        <div className="fl w-100 w-50-ns pa2">
          { !props.isFetching && props.repos.length > 0 && <Repos repos={ props.repos } /> }
        </div>
      </div>
    </div>
  </div>
);

/**
 * Map State To Props
 */
const mapStateToProps = (state) => {

  return {
    isFetching: state.githubUser.isFetching,
    profile: state.githubUser.profile || {},
    repos: state.githubUser.repos || [],
  };
};

/**
 * Map Dispatch to Props
 */
const mapDispatchToProps = (dispatch) => {

  return {
    fetchUser: (name) => dispatch(githubFetchUser(name)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GithubSearchContainer);
