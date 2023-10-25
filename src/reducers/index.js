import {combineReducers} from 'redux';
import CurrentCardReducer from './current-card';
import PlayersReducer from './players';
import CurrentPlayerReducer from './current-player';
import GameVersionReducer from './game-version';
import DrinkersReducer from './drinkers';
import CompletedReducer from './completed';
import CheckScoreReducer from './check-score';
import CardsReducer from './cards';
import HintsReducer from './hints';

export default combineReducers({
  CurrentCard: CurrentCardReducer,
  Players: PlayersReducer,
  CurrentPlayer: CurrentPlayerReducer,
  GameVersion: GameVersionReducer,
  Drinkers: DrinkersReducer,
  Completed: CompletedReducer,
  CheckScore: CheckScoreReducer,
  Cards: CardsReducer,
  Hints: HintsReducer,
});
