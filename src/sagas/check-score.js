import {takeEvery, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/check-score';

function* checkScore(action) {
  try {
    yield put(
      actions.checkScoreSuccess({
        checkScore: action.checkScore,
      }),
    );
  } catch (e) {
    console.log(e);
  }
}

function* watchCheckScore() {
  yield takeEvery(actions.Types.CHECK_SCORE_REQUEST, checkScore);
}

const checkScoreSaga = [fork(watchCheckScore)];

export default checkScoreSaga;
