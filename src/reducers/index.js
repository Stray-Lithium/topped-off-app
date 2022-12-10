import {combineReducers} from 'redux';
import CardColorReducer from './card-color';
import PlayersReducer from './players';
import CurrentPlayerReducer from './current-player';
import GameVersionReducer from './game-version';

export default combineReducers({
  CardColor: CardColorReducer,
  Players: PlayersReducer,
  CurrentPlayer: CurrentPlayerReducer,
  GameVersion: GameVersionReducer,
});
