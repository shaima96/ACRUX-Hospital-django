import { UserActionTypes } from './userActionTypes';

const INITIAL_STATE = {
  currentUser: null,
  email: null,
  id: null,
  role: "user",
  image:null,
  fetchId:null,
  contactArray:[],
  contactName:''
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
    case UserActionTypes.SET_USER_ROLE:
      return {
        ...state,
        role: action.payload
      }
      case UserActionTypes.SET_IMAGE:
      return {
        ...state,
        image: action.payload
      }
      case UserActionTypes.SET_FETCH_ID:
      return {
        ...state,
        fetchId: action.payload
      }
      case UserActionTypes.SET_CONTACT_ARRAY:
      return {
        ...state,
        contactArray: action.payload
      }
      case UserActionTypes.SET_CONTACT_TITLE:
      return {
        ...state,
        contactName: action.payload
      }
    default:
      return state;
  }
};

export default userReducer;