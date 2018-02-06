import { Observable } from 'rxjs';

import {
  RUN_TRADE_STREAM,
  STOP_TRADE_STREAM,
} from './constants';

import { saveStreamData } from './actions';

const socket = Observable.webSocket({
  url: 'ws://localhost:8080/stream',
});

const websocketTradesEpic = action$ =>
  action$.ofType(RUN_TRADE_STREAM)
    .mergeMap((action) => {
      // Observable.webSocket
      console.log('websocketTradesEpic  -- ', action);
     return socket
        .do(x => console.log("Message is : ", x))
        .takeUntil(action$.ofType(STOP_TRADE_STREAM).do(x => console.log("Action Type is : ", x)))
        .map(payload => {
          console.log(payload);
          return saveStreamData(payload);
        })
        .catch((err) => {
          console.log('ws error', err);
          return Observable.of({ type: 'ERROR' });
        });
        // .subscribe(
        //   msg => console.log('message received: ', msg),
        //   err => console.log(err),
        //   () => console.log('complete')
        // });
    });

export default websocketTradesEpic;
