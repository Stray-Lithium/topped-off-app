import {all} from 'redux-saga/effects';
import currentCardSaga from './current-card';
import playersSaga from './players';
import currentPlayerSaga from './current-player';
import gameVersionSaga from './game-version';
import drinkersSaga from './drinkers';
import completedSaga from './completed';
import checkScoreSaga from './check-score';

export default function* routeSaga() {
  yield all([
    ...currentCardSaga,
    ...playersSaga,
    ...currentPlayerSaga,
    ...gameVersionSaga,
    ...drinkersSaga,
    ...completedSaga,
    ...checkScoreSaga,
  ]);
}
