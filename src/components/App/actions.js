import {
  LOAD_TEST_CON,
  SAVE_TEST_CON,
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

