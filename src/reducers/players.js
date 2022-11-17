import {Types} from '../actions/players';

const INITIAL_STATE = {players: false};

const PlayersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.PLAYERS_SUCCESS:
      return action.players;
    default:
      return state;
  }
};

export default PlayersReducer;
