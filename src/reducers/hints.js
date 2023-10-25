import {Types} from '../actions/hints';

const INITIAL_STATE = {hints: false};

const HintsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.HINTS_SUCCESS:
      return action.hints;
    default:
      return state;
  }
};

export default HintsReducer;
