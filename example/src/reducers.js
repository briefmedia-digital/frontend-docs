import { combineReducers } from 'redux';

import githubSearchReducer from './Features/GithubSearch/reducer';
import errorMessageReducer from './Components/Utility/ErrorMessage/reducer';


export default combineReducers({
  ...githubSearchReducer,
  ...errorMessageReducer,
});

