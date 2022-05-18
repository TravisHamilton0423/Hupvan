/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = state => state.global;

const selectRoute = state => state.route;

const selectAuth = state => state.auth;

const makeSelectCurrentUser = createSelector(
  selectAuth,
  state => state.currentUser
);

const makeSelectCurrentTime = createSelector(
  selectAuth,
  state => state.currentTime
);

const makeSelectLoading = createSelector(
  selectGlobal,
  state => state.loading
);

const makeSelectPersistLoaded = createSelector(
  selectGlobal,
  state => state.persistLoaded
);

const makeSelectNotification = createSelector(
  selectGlobal,
  state => state.notification
);

const makeSelectLocation = createSelector(
  selectRoute,
  state => state.location
);

export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectCurrentUserRole,
  makeSelectLoading,
  makeSelectNotification,
  makeSelectLocation,
  makeSelectPersistLoaded,
  makeSelectAuth,
  makeSelectCurrentTime,
  makeSelectSystem,
};
