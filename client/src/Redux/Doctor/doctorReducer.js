import { DoctorActionTypes} from './doctorActionTypes';

const INITIAL_STATE = {
  currentDoctor: [],
 
};

const doctorReducer= (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DoctorActionTypes.SET_CURRENT_Doctor:
      return {
        ...state,
        currentDoctor: action.payload,
      }
    default:
      return state;
  }
};

export default doctorReducer;