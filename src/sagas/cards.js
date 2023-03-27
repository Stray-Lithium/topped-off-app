import {takeEvery, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/cards';

function* cards(action) {
  try {
    yield put(
      actions.cardsSuccess({
        cards: action.cards,
      }),
    );
  } catch (e) {
    console.log(e);
  }
}

function* watchCards() {
  yield takeEvery(actions.Types.CARDS_REQUEST, cards);
}

const cardsSaga = [fork(watchCards)];

export default cardsSaga;
