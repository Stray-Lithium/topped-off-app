import {takeEvery, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/drinkers';

function* drinkers(action) {
  try {
    yield put(
      actions.drinkersSuccess({
        drinkers: action.drinkers,
      }),
    );
  } catch (e) {
    console.log(e);
  }
}

function* watchDrinkers() {
  yield takeEvery(actions.Types.DRINKERS_REQUEST, drinkers);
}

const drinkersSaga = [fork(watchDrinkers)];

export default drinkersSaga;
