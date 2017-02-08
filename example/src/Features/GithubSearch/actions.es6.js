import fetch from 'isomorphic-fetch';

/**
 * Github Search Actions
 */
export const FETCH_USER = 'FETCH_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const REJECT_USER = 'REJECT_USER';

/**
 * Action Creators
 */

/**
 * Request User
 *
 * @description Create action to request a user
 * @param {String} name of the github user
 * @return {Action} request user action
 */
export function requestUser(name) {

  return {
    type: FETCH_USER,
    name,
  };
}

/**
 * Receive User
 *
 * @description Create action after receiving data about a user back
 * @param {Object} json data about the user
 * @return {Action} received user action
 */
export function receiveUser(json) {

  return {
    type: RECEIVE_USER,
    json,
  };
}

/**
 * Reject User
 *
 * @description Create action after request was rejected
 * @param {Object} err sent from server
 * @return {Action} server rejected request
 */
export function rejectUser(err) {

  return {
    type: REJECT_USER,
    err,
  };
}

/**
 * Async Action Creators
 */

/**
 * Fetch User
 *
 * @description Fetch data from github about a user while dispatching actions
 * @param {String} name of github user
 * @return {Promise} returns action creator that redux-thunk injects dispatch and store into
 */
export function githubFetchUser(name) {

  return (dispatch) => {

    dispatch(requestUser(name));

    return fetch('https://api.github.com/users/' + name)
      .then(res => res.json())
      .then(json => {
        dispatch(receiveUser(json));
      })
      .catch(err => {
        dispatch(rejectUser(err));
      });
  };
}
