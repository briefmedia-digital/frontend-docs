
export const SET_ERROR = 'SET_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';


export function setError(message) {
  return {
    type: SET_ERROR,
    message,
  };
}

export function clearError() {
  return {
    type: CLEAR_ERROR,
  };
}
