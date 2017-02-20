#JavaScript Home

## App flow

This application starts at **index.js**. I am pulling in the Client component, which contains the entire React frontend application and renders it to the app div. This is the entry file and the place you would be any code that needs to load before the app does like polyfills.

The main index.js loads **Client.jsx** and inside that file we are putting together redux, routes and any non-presentational utility components. We are exporting our provider as the top component and nesting our routes inside. Provider gets the store along with the initial state from the **store.es6.js** that pulls in the combined reducers for the app. The provider component takes the **routes.ex6.js** as the component `<Routes />` and within each route you will find a parent layout and child views.
