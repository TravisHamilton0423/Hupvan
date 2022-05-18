import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import * as CONSTANTS from './constants';

const initalState = {
  currentUser: null,
  signupData: {},
};

function authReducer(state = initalState, action) {
  switch (action.type) {
    case CONSTANTS.GET_PROFILE_SUCCESS:
      return {
        ...state,
        currentUser: action.data,
      }
    case CONSTANTS.FOR_SIGNUP_DATA_CLEAR:
      return {
        ...state,
        signupData: {}
      }
    case CONSTANTS.FOR_SIGNUP_DATA_SET:
      return {
        ...state,
        signupData: {
          ...state.signupData,
          ...action.data,
        }
      }
    case CONSTANTS.LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.data
      };
    case CONSTANTS.CURRENT_TIME_SUCCESS:
      return {
        ...state,
        currentTime: action.data
      };
    case CONSTANTS.LOGOUT:
      return {
        ...state,
        currentUser: null,
        signupData: {},
      };
    default:
  }

  return state;
}

export default authReducer;
