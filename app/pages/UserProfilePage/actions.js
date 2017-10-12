/*
*
* UserProfilePage actions
*
*/

import {
  DESTROY_USER_PROFILE_ACTION,
  LOAD_USER_PROFILE_ACTION,
  LOAD_USER_PROFILE_SUCCESS_ACTION,
  LOAD_USER_PROFILE_FAILED_ACTION,
  SUBMIT_USER_PROFILE_ACTION,
  SUBMIT_USER_PROFILE_SUCCESS_ACTION,
  SUBMIT_USER_PROFILE_FAILED_ACTION,
  UPDATE_AVATAR_ACTION,
  UPDATE_AVATAR_SUCCESS_ACTION,
  UPDATE_AVATAR_FAILED_ACTION,
} from './constants';

export function destroyUserProfileAction() {
  return {
    type: DESTROY_USER_PROFILE_ACTION,
  };
}

export function loadUserProfileAction() {
  return {
    type: LOAD_USER_PROFILE_ACTION,
  };
}

export function loadUserProfileSuccessAction(payload) {
  return {
    type: LOAD_USER_PROFILE_SUCCESS_ACTION,
    payload,
  };
}

export function loadUserProfileFailedAction(payload) {
  return {
    type: LOAD_USER_PROFILE_FAILED_ACTION,
    payload,
  };
}

export function submitUserProfileAction(payload, resolve, reject) {
  return {
    type: SUBMIT_USER_PROFILE_ACTION,
    payload,
    resolve,
    reject,
  };
}

export function submitUserProfileSuccessAction(payload) {
  return {
    type: SUBMIT_USER_PROFILE_SUCCESS_ACTION,
    payload,
  };
}

export function submitUserProfileFailedAction(payload) {
  return {
    type: SUBMIT_USER_PROFILE_FAILED_ACTION,
    payload,
  };
}

export function updateAvatarAction(payload, updateType) {
  return {
    type: UPDATE_AVATAR_ACTION,
    payload,
    updateType,
  };
}

export function updateAvatarSuccessAction(payload, updateType) {
  return {
    type: UPDATE_AVATAR_SUCCESS_ACTION,
    payload,
    updateType,
  };
}

export function updateAvatarFailedAction(payload, updateType) {
  return {
    type: UPDATE_AVATAR_FAILED_ACTION,
    payload,
    updateType,
  };
}
