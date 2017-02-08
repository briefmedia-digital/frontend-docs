import { combineReducers } from 'redux';

import githubSearchReducer from './Features/GithubSearch/reducer';

export default combineReducers({
  ...githubSearchReducer,
});

