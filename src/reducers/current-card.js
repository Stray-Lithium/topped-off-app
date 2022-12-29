import {Types} from '../actions/current-card';

const INITIAL_STATE = {currentCard: false};

const CurrentCardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.CURRENT_CARD_SUCCESS:
      return action.currentCard;
    default:
      return state;
  }
};

export default CurrentCardReducer;
