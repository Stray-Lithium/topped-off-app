import {takeEvery, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/card-color';

function* cardColor(action) {
  try {
    yield put(
      actions.cardColorSuccess({
        cardColor: action.cardColor,
      }),
    );
  } catch (e) {
    console.log(e);
  }
}

function* watchCardColor() {
  yield takeEvery(actions.Types.CARD_COLOR_REQUEST, cardColor);
}

const cardColorSaga = [fork(watchCardColor)];

export default cardColorSaga;
