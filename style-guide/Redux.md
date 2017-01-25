# Brief Media Redux Styleguide

## Table of Contents

  1. [Action Types](#action-types)
  2. [Action Creators](#action-creators)
  3. [Async Actions](#async-actions)
  4. [Reducers](#reducers)
  5. [State](#state)
  6. [Integration](#integration)


## Action Types
*[Redux Documentation on Actions](http://redux.js.org/docs/basics/Actions.html)*

  * Always declare action types as constants
  * Always write action types in constant case e.g. `CONSTANT_CASE`
  * Be verbose with the action type name e.g. `TOGGLE_HEADER_PROFILE_MENU` instead of something like `TOGGLE_HEADER_MENU`
  * Export every action type
  * Action types can be in a seperate file, or with the action creators. This is based on file length and need.

  ```javascript
  export const TOGGLE_HEADER_PROFILE_MENU = 'TOGGLE_HEADER_PROFILE_MENU';
  export const ADD_FAVORITE = 'ADD_FAVORITE';
  export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
  export const HEADER_POSITION_FIXED = 'HEADER_POSITION_FIXED';
  export const HEADER_POSITION_UNFIXED = 'HEADER_POSITION_UNFIXED';
  ```

####*Note*

  * Action creators can be exported one-at-a-time like the example above
  * OR they can be exported as an object

  ```javascript
  const TOGGLE_HEADER_PROFILE_MENU = 'TOGGLE_HEADER_PROFILE_MENU';
  const ADD_FAVORITE = 'ADD_FAVORITE';
  const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
  const HEADER_POSITION_FIXED = 'HEADER_POSITION_FIXED';
  const HEADER_POSITION_UNFIXED = 'HEADER_POSITION_UNFIXED';

  export {
   TOGGLE_HEADER_PROFILE_MENU,
   ADD_FAVORITE,
   REMOVE_FAVORITE,
   HEADER_POSITION_FIXED,
   HEADER_POSITION_UNFIXED,
  };
  ```

  * You can import can use the action types as properties of the export object.

  ```javascript
  import headerActions from 'path/to/header/actions.js';

  ...

  dispatch(headerActions.ADD_FAVORITE);
  ```

## Action Creators
*[Redux Documentation on Actions](http://redux.js.org/docs/basics/Actions.html)*

  * Actions creators must be pure functions as stipulated by Redux
  * Export each action creator
  * Keep the action creator as simple as possible and only use pure operations to shape the data inside action creators if needed. E.g. map, reduce, filter, concat, Object.asign, rest/spread operators, etc. as long as it does not mutate data or create side effects.
  * Use [redux-thunk](https://github.com/gaearon/redux-thunk) for async actions

  ```javascript
  import { EXAMPLE_ACTION, ANOTHER_ACTION } from 'path/to/actions.js';

  export function exampleAction() {
    return {
      type: EXAMPLE_ACTION,
      payload: { foo: 'bar' },
    };
  }
  ```

  *OR*

  ```javascript
  import exampleActions from 'path/to/actions.js';

  export function exampleAction() {
    return {
      type: exampleActions.EXAMPLE_ACTION,
      payload: { foo: 'bar' },
    };
  }

  export function anotherAction(data) {
    return {
      type: exampleActions.ANOTHER_ACTION,
      payload: data,
    };
  }
  ```

## Async Actions
*[Redux Documentation on Async Actions](http://redux.js.org/docs/advanced/AsyncActions.html)*

  * Async actions are created using [redux-thunk](https://github.com/gaearon/redux-thunk)
  * A thunk is a function that wraps an expression to delay its evaluation
  * Redux thunks make use of our AJAX services to make calls to APIs and dispatch actions during the AJAX lifecycle
  * Action types dispatched will usually follow the same naming scheme.
    * `FETCH_FOO` - An action informing the reducer that the request began. Toggles an `isFetching` state to true.
    * `RECEIVE_FOO` - Action informing the reducer that the request finished successfully. Send response to reducer.
    * `REJECT_FOO` - Action informing the reducer that the request failed. Send error response to reducer to handle.


  ```javascript

  // ACTION TYPES

  export const FETCH_USER = 'FETCH_USER';
  export const RECEIVE_USER = 'RECEIVE_USER';
  export const REJECT_USER = 'REJECT_USER';

  export const FETCH_USERS = 'FETCH_USERS';
  export const RECEIVE_USERS = 'RECEIVE_USERS';
  export const REJECT_USERS = 'REJECT_USERS';

  export const FETCH_EDIT_USER = 'FETCH_EDIT_USER';
  export const RECEIVE_EDIT_USER = 'RECEIVE_EDIT_USER';
  export const REJECT_EDIT_USER = 'REJECT_EDIT_USER';


  // ACTION CREATORS

  export function requestUser(id) {
    return {
      action: FETCH_USER,
      id,
    };
  }

  export function receiveUser(json) {
    return {
      action: RECEIVE_USER,
      data: json,
    };
  }

  export function rejectUser(err) {
    return {
      action: REJECT_USER,
      err,
    };
  }

  ...


  // ASYNC ACTION CREATORS

  export function fetchUser(id) {

    // Thunk middleware passes dispatch method as an argument to the function
    // Allowing it to dispatch actions
    return (dispatch) => {

      // Dispatch the output of the requestUser action creator
      // This changes our app's state to reflect that we are loading a user
      dispatch(requestUser(id));

      // We are returning a Promise here to stay consistent with our style
      // The function called by the thunk middleware can return a value
      // which is passed on as the return value of the dispatch method
      return fetch('//url.tld/to/api')
        .then(res => res.json())
        .then(json => {

          // We can prepare our data from the api call here
          // We can also dispatch as many actions as we want from here
          dispatch(receiveUser(json));
        })
        .catch(err => {

          // Inside of catch we can dispatch as many actions as we want
          // NOTE: Make sure to always dispatch the proper REJECT action here
          dispatch(rejectUser(err));
        });
    }
  }

  ```

