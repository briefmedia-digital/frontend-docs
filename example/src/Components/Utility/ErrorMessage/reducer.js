
import { SET_ERROR, CLEAR_ERROR } from './actions';


const initState = {
  error: '',
};

const messages = (state = initState, action) => {

  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: action.message,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: '',
      };
    default:
      return state;
  }

}

const ErrorMessageReducer = {
  messages,
};

export default ErrorMessageReducer;
