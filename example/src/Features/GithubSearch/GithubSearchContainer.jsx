import React, { Component } from 'react';
import { SearchForm } from '../../Components/Organisms/SearchForm';
import { connect } from 'react-redux';
import { githubFetchUser } from './actions';


const GithubSearchContainer = (props) => (
  <div>
    <SearchForm handleSubmit={ props.fetchUser } />
  </div>
);

/**
 * Map State To Props
 */
const mapStateToProps = (state) => {

  return {
    isFetching: state.githubUser.isFetching,
    profile: state.githubUser.profile || {},
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
