/* eslint no-param-reassign: 0 */
/* global System */
import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import createReducer from './reducers';
import createEpic from './epics';

export default (initialState = {}) => {
  const devtools = window.devToolsExtension || (() => noop => noop);

  const epicMiddleware = createEpicMiddleware(createEpic);

  const middlewares = [
    epicMiddleware
  ];

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

  if (module.hot) {
    module.hot.accept('./epics', () => {
      // const rootEpic = require('./where-ever-they-are').default;
      epicMiddleware.replaceEpic(createEpic);
    });
  }

  return store;
};
