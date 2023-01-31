import {Types} from '../actions/check-score';

const INITIAL_STATE = {checkScore: false};

const CheckScoreReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.CHECK_SCORE_SUCCESS:
      return action.checkScore;
    default:
      return state;
  }
};

export default CheckScoreReducer;
