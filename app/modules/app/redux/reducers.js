import { combineReducers } from 'redux';

import bookReducer from '../book/redux/reducers';
// import profileReducer from '../profile/redux/reducers';

const appReducer = combineReducers({
  book: bookReducer,
  // profile: profileReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
