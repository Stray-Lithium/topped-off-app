import {Types} from '../actions/completed';

const INITIAL_STATE = {completed: false};

const CompletedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.COMPLETED_SUCCESS:
      return action.completed;
    default:
      return state;
  }
};

export default CompletedReducer;
