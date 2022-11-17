import {Types} from '../actions/card-color';

const INITIAL_STATE = {cardColor: false};

const CardColorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.CARD_COLOR_SUCCESS:
      return action.cardColor;
    default:
      return state;
  }
};

export default CardColorReducer;
