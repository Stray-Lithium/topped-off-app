import {Types} from '../actions/game-version';

const INITIAL_STATE = {gameVersion: false};

const GameVersionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GAME_VERSION_SUCCESS:
      return action.gameVersion;
    default:
      return state;
  }
};

export default GameVersionReducer;
