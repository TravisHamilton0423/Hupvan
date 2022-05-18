import * as CONSTANTS from './constants';

export function setPassword(data) {
  return {
    type: CONSTANTS.SET_PASSWORD,
    data,
  }
}

export function getProfile() {
  return {
    type: CONSTANTS.GET_PROFILE,
  }
}

export function getProfileSuccess(data) {
  return {
    type: CONSTANTS.GET_PROFILE_SUCCESS,
    data,
  }
}

export function profileUpdate(data) {
  return {
    type: CONSTANTS.PROFILE_UPDATE,
    data,
  }
}

export function forSignupDataClear() {
  return {
    type: CONSTANTS.FOR_SIGNUP_DATA_CLEAR,
  }
}

export function forSignupDataSet(data) {
  return {
    type: CONSTANTS.FOR_SIGNUP_DATA_SET,
    data,
  }
}

export function loginRequest(data) {
  return {
    type: CONSTANTS.LOGIN_REQUEST,
    data
  };
}

export function loginByToken(token, callback) {
  return {
    type: CONSTANTS.LOGIN_BY_TOKEN_REQUEST,
    token,
    callback,
  };
}

export function loginSuccess(data) {
  return {
    type: CONSTANTS.LOGIN_SUCCESS,
    data,
  };
}

export function loginError(data) {
  return {
    type: CONSTANTS.LOGIN_ERROR,
    ...data,
  };
}


export function logout() {
  return {
    type: CONSTANTS.LOGOUT,
  };
}

export function getCurrentTimeRequest() {
  return {
    type: CONSTANTS.GET_CURRENT_TIME,
  };
}

export function currentTimeSaveSuccess(data) {
  return {
    type: CONSTANTS.CURRENT_TIME_SUCCESS,
    data
  };
}


export function signupRequest(data) {
  return {
    type: CONSTANTS.SIGNUP_REQUEST,
    data,
  };
}

export function signupSuccess(data) {
  return {
    type: CONSTANTS.SIGNUP_SUCCESS,
    data,
  };
}

export function signupError(data) {
  return {
    type: CONSTANTS.SIGNUP_ERROR,
    ...data,
  };
}

