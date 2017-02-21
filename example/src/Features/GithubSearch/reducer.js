import {
  FETCH_USER, RECEIVE_USER, REJECT_USER,
  FETCH_USER_REPOS, RECEIVE_USER_REPOS, REJECT_USER_REPOS
} from './actions';

const initState = {
  profile: {},
  repos: [],
  isFetching: false,
};

const githubUser = (state = initState, action) => {

  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_USER:
      return {
        ...state,
        isFetching: false,
        profile: action.json,
      };
    case REJECT_USER:
      return {
        ...state,
        isFetching: false,
      };
    case FETCH_USER_REPOS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_USER_REPOS:
      return {
        ...state,
        isFetching: false,
        repos: action.json,
      };
    case REJECT_USER_REPOS:
      return {
        ...state,
        isFetching: false,
        repos: [],
      };
    default:
      return state;
  }

}

const githubSearchReducer = {
  githubUser,
};

export default githubSearchReducer;
