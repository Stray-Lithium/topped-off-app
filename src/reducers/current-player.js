import {Types} from '../actions/current-player';

const INITIAL_STATE = {currentPlayer: false};

const CurrentPlayerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.CURRENT_PLAYER_SUCCESS:
      return action.currentPlayer;
    default:
      return state;
  }
};

export default CurrentPlayerReducer;
