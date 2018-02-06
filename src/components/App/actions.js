import {
  LOAD_TEST_CON,
  SAVE_TEST_CON,
  RUN_TRADE_STREAM,
  STOP_TRADE_STREAM,
  SAVE_STREAM_DATA,
} from './constants';

export function loadTest(data) {
  console.log('action -- ', data);
  return {
    type: LOAD_TEST_CON,
    data
  };
}

export function saveTest(data) {
  return {
    type: SAVE_TEST_CON,
    data,
  };
}

export function startStream() {
  console.log('startStream -- ');
  return {
    type: RUN_TRADE_STREAM,
  };
}

export function stopStream() {
  console.log('stopStream -- ');
  return {
    type: STOP_TRADE_STREAM,
  };
}

export function saveStreamData(data) {
  console.log('saveStreamData -- ', data);
  return {
    type: SAVE_STREAM_DATA,
    payload: data
  };
}
