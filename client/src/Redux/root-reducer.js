import { combineReducers } from 'redux';

import userReducer from './User/userReduser';
import departmentReducer from './Department/departmentReducer'

export default combineReducers({
  user: userReducer,
  department:departmentReducer
});