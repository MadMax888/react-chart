
import { combineReducers } from 'redux';

const createReducer = asyncReducers => combineReducers({
  ...{
    // inject you reducers here
    rootReducer: () => null, // example
  },
  ...asyncReducers,
});

export default createReducer;
