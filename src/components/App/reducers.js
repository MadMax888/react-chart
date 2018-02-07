import {
  SAVE_CHART_DATA,
  SAVE_TRADES_DATA,
} from './constants';

// The initial state of the App
const initialState = {
  chartData: [],
  tradesData: [],
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_TRADES_DATA:
      return {
        ...state,
        tradesData: [...state.tradesData, action.payload]
      };
    case SAVE_CHART_DATA:
      return {
        ...state,
        chartData: [...state.chartData, action.payload]
      };
    default:
      return state;
  }
}

export default appReducer;
