import {takeEvery, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/game-version';

function* gameVersion(action) {
  try {
    yield put(
      actions.gameVersionSuccess({
        gameVersion: action.gameVersion,
      }),
    );
  } catch (e) {
    console.log(e);
  }
}

function* watchGameVersion() {
  yield takeEvery(actions.Types.GAME_VERSION_REQUEST, gameVersion);
}

const gameVersionSaga = [fork(watchGameVersion)];

export default gameVersionSaga;
