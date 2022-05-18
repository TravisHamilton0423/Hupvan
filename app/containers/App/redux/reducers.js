import { REHYDRATE } from 'redux-persist/constants';
import * as CONSTANTS from './constants';

const initialState = {
  persistLoaded: false,
  loading: false,
  notification: {
    type: '',
    visible: false,
    heading: '',
    message: '',
  },
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case REHYDRATE:
      return {
        ...state,
        persistLoaded: true
      };
    case CONSTANTS.SET_API_LOADING:
      return {
        ...state,
        loading: action.value
      };
    case CONSTANTS.SET_GLOBAL_NOTIFICATION:
      return {
        ...state,
        notification: {
          type: action.messageType,
          visible: action.visible,
          heading: action.heading,
          message: action.message,
        }
      };
    case CONSTANTS.INIT_GLOBAL_NOTIFICATION:
      return {
        ...state,
        notification: {
          type: '',
          visible: false,
          heading: '',
          message: '',
        }
      };
    default:
      return state;
  }
}

export default appReducer;
