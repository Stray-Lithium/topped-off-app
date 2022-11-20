import {all} from 'redux-saga/effects';
import cardColorSaga from './card-color';
import playersSaga from './players';
import currentPlayerSaga from './current-player';

export default function* routeSaga() {
  yield all([...cardColorSaga, ...playersSaga, ...currentPlayerSaga]);
}
