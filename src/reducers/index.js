import {combineReducers} from 'redux';
import CardColorReducer from './card-color';
import PlayersReducer from './players';

export default combineReducers({
  CardColor: CardColorReducer,
  Players: PlayersReducer,
});
