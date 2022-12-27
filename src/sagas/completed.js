import {takeEvery, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/completed';

function* completed(action) {
  try {
    yield put(
      actions.completedSuccess({
        completed: action.completed,
      }),
    );
  } catch (e) {
    console.log(e);
  }
}

function* watchCompleted() {
  yield takeEvery(actions.Types.COMPLETED_REQUEST, completed);
}

const completedSaga = [fork(watchCompleted)];

export default completedSaga;
