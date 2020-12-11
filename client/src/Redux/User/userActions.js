import { UserActionTypes } from './userActionTypes';

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export const setUserRole = role => ({
  type: UserActionTypes.SET_USER_ROLE,
  payload: role
});

export const setUserImage = image => ({
  type: UserActionTypes.SET_USER_IMAGE,
  payload: image
});