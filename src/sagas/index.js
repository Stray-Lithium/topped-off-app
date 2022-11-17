import {all} from 'redux-saga/effects';
import cardColorSaga from './card-color';
import playersSaga from './players';

export default function* routeSaga() {
  yield all([...cardColorSaga, ...playersSaga]);
}
