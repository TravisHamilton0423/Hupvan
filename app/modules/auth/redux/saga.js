import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import history from 'browserHistory';
import * as CONSTANTS from './constants';

import {
  initGlobalNotification,
} from '../../../containers/App/redux/actions'

import {
  getProfile,
  getProfileSuccess,
  loginSuccess,
  loginError,
  currentTimeSaveSuccess,
  signupSuccess,
  signupError,
} from './actions';

export function* setPassword(action) {
  try {
    const data = yield call(request, 'auth/set_password', 'POST', action.data, true);
    if(data.state === 'ok')
      notify.success('Password set has done successfully')
    else
      notify.error('Current password is incorrect')
  } catch (err) {
    notify.error('Password set error')
  }
}

export function* getProfiles(action) {
  try {
    const data = yield call(request, 'profile', 'GET', null, true);
    yield put(getProfileSuccess(data));
  } catch (err) {
  }
}

export function* profileUpdate(action) {
  try {
    const data = yield call(request, 'profile', 'POST', action.data, true);
    yield put(getProfile());
    notify.success('profile update ok')
    // history.push('/profile/service_detail');
    initGlobalNotification();
  } catch (err) {
    // yield put(updateError(err));
    notify.error('profile update error')
  }
}

export function* loginRequest(action) {
  try {
    const data = yield call(request, 'auth/login', 'POST', action.data);
    yield put(loginSuccess(data));
    if(data.role === 'customer')
      history.push('/book/general')
    else
      history.push('/profile')
    initGlobalNotification();
  } catch (err) {
    yield put(loginError(err));
    notify.error('login request error')
  }
}

export function* loginByTokenRequest({ token, callback }) {
  try {
    const data = yield call(request, 'auth/login/by_token', 'POST', { token });
    yield put(loginSuccess(data));
    callback && callback(true);
    initGlobalNotification();
  } catch (err) {
    yield put(loginError(err));
    callback && callback(false);
  }
}

export function* getCurrentTimeRequest() {
  try {
    const time = yield call(request, 'auth/currentTime', 'GET', null);
    yield put(currentTimeSaveSuccess(time));
  } catch (err) {
  }
}

export function* signupRequest(action) {
  try {
    const data = yield call(request, 'auth/signup', 'POST', action.data);
    yield put(signupSuccess(data));
    notify.success('Your account has been created');
    history.push('/');
  } catch (err) {
    yield put(signupError(err));
    notify.error('signup request error')
  }
}

export default function* authSaga() {
  yield takeLatest(CONSTANTS.SET_PASSWORD, setPassword);
  yield takeLatest(CONSTANTS.GET_PROFILE, getProfiles);
  yield takeLatest(CONSTANTS.PROFILE_UPDATE, profileUpdate);
  yield takeLatest(CONSTANTS.LOGIN_REQUEST, loginRequest);
  yield takeLatest(CONSTANTS.LOGIN_BY_TOKEN_REQUEST, loginByTokenRequest);
  yield takeLatest(CONSTANTS.GET_CURRENT_TIME, getCurrentTimeRequest);
  yield takeLatest(CONSTANTS.SIGNUP_REQUEST, signupRequest);
}
