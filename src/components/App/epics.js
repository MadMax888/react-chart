import { Observable } from 'rxjs';

import {
  RUN_TRADE_STREAM,
  STOP_TRADE_STREAM,
} from './constants';

import { saveStreamData } from './actions';

const websocketTradesEpic = action$ =>
  action$.ofType(RUN_TRADE_STREAM)
    .mergeMap((action) => {
      // Observable.webSocket
      console.log('websocketTradesEpic  -- ', action);
      Observable.webSocket({
        url: 'ws://localhost:8080/stream',
      }).subscribe(
        msg => console.log('message received: ', msg),
        err => console.log(err),
        () => console.log('complete')
      )
        .map(payload => saveStreamData(payload))
        .takeUntil(action$.ofType(STOP_TRADE_STREAM))
        .catch((err) => {
          console.log('ws error', err);
          return Observable.of({ type: 'ERROR' });
        });

    });

export default websocketTradesEpic;
