import {
  takeEvery,
  call,
  put,
  take,
  cancel,
} from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { setTokenAction } from 'redux-auth/lib/containers/AuthenticationProvider/actions';
import {
  loadUserProfileSuccessAction,
  loadUserProfileFailedAction,
  submitUserProfileSuccessAction,
  submitUserProfileFailedAction,
  updateAvatarSuccessAction,
  updateAvatarFailedAction,
} from './actions';
import {
  LOAD_USER_PROFILE_ACTION,
  SUBMIT_USER_PROFILE_ACTION,
  UPDATE_AVATAR_ACTION,
} from './constants';
import {
  getUserProfile,
  patchUserProfile,
} from './api';

export function* watchLoadUserProfileSaga() {
  const watcher = yield takeEvery(LOAD_USER_PROFILE_ACTION, loadUserProfileSaga);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* loadUserProfileSaga() {
  try {
    const response = yield call(getUserProfile);
    yield put(loadUserProfileSuccessAction(response.data));
  } catch (error) {
    yield put(loadUserProfileFailedAction(error));
  }
}

export function* watchSubmitUserProfileSaga() {
  const watcher = yield takeEvery(SUBMIT_USER_PROFILE_ACTION, submitUserProfileSaga);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* submitUserProfileSaga(action) {
  const {
    payload,
    resolve,
    reject,
  } = action;

  try {
    const { data } = yield call(patchUserProfile, payload);
    if (data.token) {
      yield put(setTokenAction(data.token));
    }
    yield put(submitUserProfileSuccessAction(data));
    yield call(resolve, data);
  } catch (error) {
    yield put(submitUserProfileFailedAction(error.response));
    yield call(reject, error.response);
  }
}

export function* watchUpdateAvatarSaga() {
  const watcher = yield takeEvery(UPDATE_AVATAR_ACTION, updateAvatarSaga);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* updateAvatarSaga(action) {
  const { payload } = action;

  try {
    const { data } = yield call(patchUserProfile, payload);
    yield put(updateAvatarSuccessAction(data));
  } catch (error) {
    yield put(updateAvatarFailedAction(error.response));
  }
}

// All sagas to be loaded
export default [
  watchLoadUserProfileSaga,
  watchSubmitUserProfileSaga,
  watchUpdateAvatarSaga,
];
