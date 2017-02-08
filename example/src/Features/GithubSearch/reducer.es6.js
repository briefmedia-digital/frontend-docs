import { FETCH_USER, RECEIVE_USER, REJECT_USER } from './actions';

const initState = {
  profile: {},
  isFetching: false,
  errors: [],
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
        errors: state.errors.concat(action.err),
      };
    default:
      return state;
  }

}

const githubSearchReducer = {
  githubUser,
};

export default githubSearchReducer;
