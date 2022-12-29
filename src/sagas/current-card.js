import {takeEvery, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/current-card';

function* currentCard(action) {
  try {
    yield put(
      actions.currentCardSuccess({
        currentCard: action.currentCard,
      }),
    );
  } catch (e) {
    console.log(e);
  }
}

function* watchCurrentCard() {
  yield takeEvery(actions.Types.CURRENT_CARD_REQUEST, currentCard);
}

const currentCardSaga = [fork(watchCurrentCard)];

export default currentCardSaga;
