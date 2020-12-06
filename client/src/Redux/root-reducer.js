import { combineReducers } from 'redux';

import userReducer from './User/userReduser';

export default combineReducers({
  user: userReducer
});