import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';


export default initState => {
  if (process.env.NODE_ENV === 'development') {
    return createStore(
      reducers,
      initState,
      composeWithDevTools(applyMiddleware(thunk)),
    );
  }
  return createStore(
    reducers,
    initState,
    compose(
      applyMiddleware(thunk),
    ),
  );
};

