import { UserActionTypes } from './userActionTypes';

const INITIAL_STATE = {
  currentUser: null,
  email:null,
  id: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload.name,
        email: action.payload.email,
        id: action.payload.id
      };
    default:
      return state;
  }
};

export default userReducer;