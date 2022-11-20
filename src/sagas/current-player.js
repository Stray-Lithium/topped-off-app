import {takeEvery, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/current-player';

function* currentPlayer(action) {
  try {
    yield put(
      actions.currentPlayerSuccess({
        currentPlayer: action.currentPlayer,
      }),
    );
  } catch (e) {
    console.log(e);
  }
}

function* watchCurrentPlayer() {
  yield takeEvery(actions.Types.CURRENT_PLAYER_REQUEST, currentPlayer);
}

const currentPlayerSaga = [fork(watchCurrentPlayer)];

export default currentPlayerSaga;
