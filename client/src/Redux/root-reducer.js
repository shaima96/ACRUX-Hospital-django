import { combineReducers } from 'redux';
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import userReducer from './User/userReduser';
import doctorReducer from './Doctor/doctorReducer';

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['user']
}

const rootReducer = combineReducers({
  user: userReducer,
  doctor: doctorReducer
});

export default persistReducer(persistConfig, rootReducer)
