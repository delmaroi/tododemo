import {
  takeLatest,
  put,
  fork,
} from 'redux-saga/effects';
import * as Config from 'Config'; // eslint-disable-line import/extensions
import { getStateDataFromToken } from 'redux-auth/lib/containers/AuthenticationProvider/utils';
import {
  SET_TOKEN_ACTION,
  CLEAR_TOKEN_ACTION,
} from 'redux-auth/lib/containers/AuthenticationProvider/constants';
import {
  WEBSOCKET_CONNECT,
  WEBSOCKET_DISCONNECT,
} from '@giantmachines/redux-websocket';

export function* watchSetToken() {
  yield takeLatest(SET_TOKEN_ACTION, handleSetToken);
}

export function* handleSetToken(action) {
  yield fork(jiraCaptureSaga, action);
  yield fork(websocketsInitSaga, action);
}

export function* jiraCaptureSaga(action) {
  const { payload } = action;

  const data = getStateDataFromToken(payload);
  const jiraCaptureData = {};


  if (data.get('isAuthenticated')) {
    jiraCaptureData.email = data.get('user').get('email');
    jiraCaptureData.loginAsUrl = Config.LOGIN_AS_URL + data.get('user').get('id');
  }

  window.jiraCapture = jiraCaptureData;
}

export function* websocketsInitSaga(action) {
  const token = action.payload;

  // Lib closes previous connections if it exists on connect, so we don't need to handle it manually
  yield put({
    type: WEBSOCKET_CONNECT,
    payload: {
      url: `${Config.WEBSOCKETS_URL}&token=${token}`,
    },
  });
}

export function* watchClearToken() {
  yield takeLatest(CLEAR_TOKEN_ACTION, websocketsCloseSaga);
}

export function* websocketsCloseSaga() {
  yield put({ type: WEBSOCKET_DISCONNECT });
}

export default [
  watchSetToken,
  watchClearToken,
];
