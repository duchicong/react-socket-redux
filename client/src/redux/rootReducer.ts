import { combineReducers } from 'redux';
import { usersReducer } from './users';

const rootReducer = combineReducers({
  // reducer something..
  usersReducer
});

export default rootReducer;
