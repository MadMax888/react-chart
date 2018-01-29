/* eslint no-param-reassign: 0 */
import { createStore, applyMiddleware, compose } from 'redux';
import createReducer from './reducers';

export default (initialState = {}) => {

  const devtools = window.devToolsExtension || (() => noop => noop);

  const middlewares = [];

  const enhancers = [
    applyMiddleware(...middlewares),
    devtools(),
  ];

  const store = createStore(
    createReducer(),
    {
      ...initialState
    },
    compose(...enhancers),
  );

  store.asyncReducers = {};

  if (process.env.NODE_ENV === 'development') {
    window.store = store;
  }

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      System.import('./reducers').then((reducerModule) => {
        const createReducers = reducerModule.default;
        const nextReducers = createReducers(store.asyncReducers);

        store.replaceReducer(nextReducers);
      });
    });
  }


  return store;
};
