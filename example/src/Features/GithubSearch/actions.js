import fetch from 'isomorphic-fetch';
import { setError } from '../../Components/Utility/ErrorMessage/actions';

/**
 * Github Search Actions
 */
export const FETCH_USER = 'FETCH_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const REJECT_USER = 'REJECT_USER';

export const FETCH_USER_REPOS = 'FETCH_USER_REPOS';
export const RECEIVE_USER_REPOS = 'RECEIVE_USER_REPOS';
export const REJECT_USER_REPOS = 'REJECT_USER_REPOS';

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
 * Request User Repos
 *
 * @description Create action to request a user's repos
 * @param {String} name of the github user
 * @return {Action} request user repos action
 */
export function requestUserRepos(name) {

  return {
    type: FETCH_USER_REPOS,
    name,
  };
}

/**
 * Receive User Repos
 *
 * @description Create action after receiving data about a user's repos
 * @param {Object} json data about the user's repos
 * @return {Action} received user repos action
 */
export function receiveUserRepos(json) {

  return {
    type: RECEIVE_USER_REPOS,
    json,
  };
}

/**
 * Reject User Repos
 *
 * @description Create action after request was rejected
 * @param {Object} err sent from server
 * @return {Action} server rejected repos request
 */
export function rejectUserRepos(err) {

  return {
    type: REJECT_USER_REPOS,
    err,
  };
}

/**
 * Async Action Creators
 */


/**
 * Fetch User's Repos
 *
 * @description Fetch data from github about a users repos while dispatching actions
 * @param {String} name of github user
 * @return {Promise} returns action creator that redux-thunk injects dispatch and store into
 */
function githubFetchUserRepos(name) {

  return (dispatch) => {

    dispatch(requestUserRepos(name));

    return fetch(`https://api.github.com/users/${name}/repos`)
      .then(res => res.json())
      .then(json => {

        dispatch(receiveUserRepos(json));
      })
      .catch(err => {
        dispatch(rejectUserRepos(err));
      });
  };
}

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

    return fetch(`https://api.github.com/users/${name}`)
      .then(res => res.json())
      .then(json => {
        if (json.message && json.message === 'Not Found') {
          dispatch(setError('User not found, please try again'));
        } else {
          dispatch(githubFetchUserRepos(name));
          dispatch(receiveUser(json));
        }
      })
      .catch(err => {
        dispatch(rejectUser(err));
      });
  };
}
