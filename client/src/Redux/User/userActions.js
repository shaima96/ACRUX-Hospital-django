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

export const setMessageId=id=>({
  type: UserActionTypes.SET_MESSAGE_ID,
  payload : id
})

export const setFetchId=id=>({
  type: UserActionTypes.SET_FETCH_ID,
  payload : id
})