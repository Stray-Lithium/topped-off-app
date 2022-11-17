import {takeEvery, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/players';

function* players(action) {
  try {
    yield put(
      actions.playersSuccess({
        players: action.players,
      }),
    );
  } catch (e) {
    console.log(e);
  }
}

function* watchPlayers() {
  yield takeEvery(actions.Types.PLAYERS_REQUEST, players);
}

const playersSaga = [fork(watchPlayers)];

export default playersSaga;
