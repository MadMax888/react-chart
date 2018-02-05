import {
  LOAD_TEST_CON,
  SAVE_STREAM_DATA,
} from './constants';

// The initial state of the App
const initialState = {
  testData: null
};

function appReducer(state = initialState, action) {
  // console.log('red action tr', action);
  switch (action.type) {
    case LOAD_TEST_CON:
      return {
        ...state,
        testData: action.data.testData + 1,
      };
    case SAVE_STREAM_DATA:
      console.log('reducer SAVE_STREAM_DATA -- ', action);
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default appReducer;
