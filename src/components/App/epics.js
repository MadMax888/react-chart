import { Observable } from 'rxjs';

import {
  RUN_TRADE_STREAM,
  STOP_TRADE_STREAM,
} from './constants';

import { saveChartData, saveTradesData } from './actions';

const socket$ = Observable.webSocket({
  url: 'ws://localhost:8080/stream',
});

const websocketTradesEpic = action$ =>
  action$.ofType(RUN_TRADE_STREAM)
    .mergeMap(() => socket$
      .map((payload) => {
        switch (payload.type) {
          case 'TRADE':
            return saveTradesData(payload);
          case 'PRICE':
            return saveChartData(payload);
          default:
            // console.log('payload def -- ', payload);
            return payload;
        }
      })
      .takeUntil(action$.ofType(STOP_TRADE_STREAM))
      .catch((err) => {
        console.error('ws error', err);
        return Observable.of({ type: 'ERROR' }); // eslint-disable-line object-curly-newline
      }));

export default websocketTradesEpic;
