import {
  RUN_TRADE_STREAM,
  STOP_TRADE_STREAM,
  SAVE_TRADES_DATA,
  SAVE_CHART_DATA,
} from './constants';

export function startStream() {
  return {
    type: RUN_TRADE_STREAM,
  };
}

export function stopStream() {
  return {
    type: STOP_TRADE_STREAM,
  };
}

export function saveChartData(data) {
  return {
    type: SAVE_CHART_DATA,
    payload: data
  };
}
export function saveTradesData(data) {
  return {
    type: SAVE_TRADES_DATA,
    payload: data
  };
}
