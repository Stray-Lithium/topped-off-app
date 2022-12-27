import {Types} from '../actions/drinkers';

const INITIAL_STATE = {drinkers: false};

const DrinkersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.DRINKERS_SUCCESS:
      return action.drinkers;
    default:
      return state;
  }
};

export default DrinkersReducer;
