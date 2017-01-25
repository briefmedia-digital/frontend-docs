# Brief Media Redux Styleguide

## Table of Contents

  1. [Action Types](#action-types)
  2. [Action Creators](#action-creators)
  3. [Async Actions](#async-actions)
  4. [Reducers](#reducers)
  5. [State](#state)
  6. [Integration](#integration)


## Action Types

  * Always declare action types as constants
  * Always write action types in constant case e.g. `CONSTANT_CASE`
  * Be verbose with the action type name e.g. `TOGGLE_HEADER_PROFILE_MENU` instead of something like `TOGGLE_HEADER_MENU`
  * Export every action type
  * Action types can be in a seperate file, or with the action creators based on file length

  ```javascript
  export const TOGGLE_HEADER_PROFILE_MENU = 'TOGGLE_HEADER_PROFILE_MENU';
  export const ADD_FAVORITE = 'ADD_FAVORITE';
  export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
  export const HEADER_POSITION_FIXED = 'HEADER_POSITION_FIXED';
  export const HEADER_POSITION_UNFIXED = 'HEADER_POSITION_UNFIXED';
  ```

## Action Creators
