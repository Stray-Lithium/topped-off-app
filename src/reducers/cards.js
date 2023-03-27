import {Types} from '../actions/cards';

const INITIAL_STATE = {cards: false};

const CardsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.CARDS_SUCCESS:
      return action.cards;
    default:
      return state;
  }
};

export default CardsReducer;
