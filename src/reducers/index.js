import {combineReducers} from 'redux';
import CardColorReducer from './card-color';
import PlayersReducer from './players';
import CurrentPlayerReducer from './current-player';
import GameVersionReducer from './game-version';
import DrinkersReducer from './drinkers';
import CompletedReducer from './completed';

export default combineReducers({
  CardColor: CardColorReducer,
  Players: PlayersReducer,
  CurrentPlayer: CurrentPlayerReducer,
  GameVersion: GameVersionReducer,
  Drinkers: DrinkersReducer,
  Completed: CompletedReducer,
});
