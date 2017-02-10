import React, { Component } from 'react';
import { SearchForm } from '../../Components/Organisms/SearchForm';
import { connect } from 'react-redux';
import { githubFetchUser } from './actions';


const Repos = (props) => {

  console.log(props);

  const repos = props.repos.map(repo => {
    return (<li key={ repo.id }>{ repo.name }</li>);
  })

  return (
    <ul>
      { repos }
    </ul>
  );
};

const GithubSearchContainer = (props) => (
  <div>
    <SearchForm handleSubmit={ props.fetchUser } />
    <div>
      <div className="col-6">
        { !props.isFetching && props.profile.name && <Profile { ...props.profile } /> }
      </div>
      <div className="col-6">
        { !props.isFetching && props.repos.length > 0 && <Repos repos={ props.repos } /> }
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
