import { UserActionTypes } from './userActionTypes';

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export const setUserRole = role => ({
  type: UserActionTypes.SET_USER_ROLE,
  payload: role
});

export const setPatientId = id => ({
  type: UserActionTypes.SET_PATIENT_ID,
  payload : id
})