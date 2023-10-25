import {takeEvery, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/hints';

function* hints(action) {
  try {
    yield put(
      actions.hintsSuccess({
        hints: action.hints,
      }),
    );
  } catch (e) {
    console.log(e);
  }
}

function* watchHints() {
  yield takeEvery(actions.Types.HINTS_REQUEST, hints);
}

const hintsSaga = [fork(watchHints)];

export default hintsSaga;
