import {
  LOAD_TEST_CON,
  SAVE_TEST_CON,
} from './constants';

// The initial state of the App
const initialState = {
  testData: null
};

function appReducer(state = initialState, action) {
  console.log('red action', action);
  switch (action.type) {
    case LOAD_TEST_CON:
      return {
        ...state,
        testData: action.data.testData,
      };
    default:
      return state;
  }
}

export default appReducer;
