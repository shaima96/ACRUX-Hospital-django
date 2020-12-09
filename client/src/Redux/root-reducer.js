import { combineReducers } from 'redux';
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import userReducer from './User/userReduser';
import departmentReducer from './Department/departmentReducer'
import articlesReducer from './Articles/articlesReducer'
export default combineReducers({
  user: userReducer,
  articles:articlesReducer
  
});
