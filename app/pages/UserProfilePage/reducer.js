/*
 *
 * UserProfilePage reducer
 *
 */

import { fromJS } from 'immutable';
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

const initialState = fromJS({
  loadingUserProfile: true,
  userProfile: null,
  isRemovingAvatar: false,
  isUploadingAvatar: false,
});

function userProfilePageReducer(state = initialState, action) {
  switch (action.type) {
    case DESTROY_USER_PROFILE_ACTION:
      return onDestroyUserProfileAction();

    case LOAD_USER_PROFILE_ACTION:
      return onLoadUserProfileAction(state);
    case LOAD_USER_PROFILE_SUCCESS_ACTION:
      return onLoadUserProfileSuccessAction(state, action);
    case LOAD_USER_PROFILE_FAILED_ACTION:
      return onLoadUserProfileFailedAction(state);

    case SUBMIT_USER_PROFILE_ACTION:
      return onSubmitUserProfileAction(state);
    case SUBMIT_USER_PROFILE_SUCCESS_ACTION:
      return onSubmitUserProfileSuccessAction(state, action);
    case SUBMIT_USER_PROFILE_FAILED_ACTION:
      return onSubmitUserProfileFailedAction(state);

    case UPDATE_AVATAR_ACTION:
      return onUpdateAvatarAction(state, action);
    case UPDATE_AVATAR_SUCCESS_ACTION:
      return onUpdateAvatarSuccessAction(state, action);
    case UPDATE_AVATAR_FAILED_ACTION:
      return onUpdateAvatarFailedAction(state);

    default:
      return state;
  }
}

function onDestroyUserProfileAction() {
  return initialState;
}

function onLoadUserProfileAction(state) {
  return state.merge({
    loadingUserProfile: true,
  });
}

function onLoadUserProfileSuccessAction(state, action) {
  return state.merge({
    loadingUserProfile: false,
    userProfile: action.payload,
  });
}

function onLoadUserProfileFailedAction(state) {
  return state.merge({
    loadingUserProfile: false,
  });
}

function onSubmitUserProfileAction(state) {
  return state.merge({
    loadingUserProfile: false,
  });
}

function onSubmitUserProfileSuccessAction(state, action) {
  return state.merge({
    loadingUserProfile: false,
    userProfile: action.payload,
  });
}

function onSubmitUserProfileFailedAction(state) {
  return state.merge({
    loadingUserProfile: false,
  });
}

function onUpdateAvatarAction(state, action) {
  return state.merge({
    loadingUserProfile: false,
    isRemovingAvatar: action.updateType === 'remove',
    isUploadingAvatar: action.updateType === 'change',
  });
}

function onUpdateAvatarSuccessAction(state, action) {
  return state.merge({
    loadingUserProfile: false,
    userProfile: action.payload,
    isRemovingAvatar: false,
    isUploadingAvatar: false,
  });
}

function onUpdateAvatarFailedAction(state) {
  return state.merge({
    loadingUserProfile: false,
    isRemovingAvatar: false,
    isUploadingAvatar: false,
  });
}

export default userProfilePageReducer;
