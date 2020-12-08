import { combineReducers } from 'redux';
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import userReducer from './User/userReduser';
<<<<<<< HEAD
import departmentReducer from './Department/departmentReducer'

export default combineReducers({
  user: userReducer,
  department:departmentReducer
});
=======
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
>>>>>>> 633d7924ea34293a3c26b2809b7d7c098cc11e11
