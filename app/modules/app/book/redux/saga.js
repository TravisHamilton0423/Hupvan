import { fork, call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import history from 'browserHistory';
import * as CONSTANTS from './constants';
import {
  bookStorageGetSuccess,
  bookPromoCodeSuccess,
  getCurrentBooks,
  getBooksSuccess,
  bookCreateSuccess,
} from './actions';

export function* bookStorageGet(action) {
  try {
    const data = yield call(request, 'book/storage/get', 'GET', null, true);
    yield put(bookStorageGetSuccess(data));
  } catch (err) {
    notify.error('storage get error')
  }
}

export function* promoCodeCheck(action) {
  try {
    const data = yield call(request, 'book/promo_code', 'POST', action.data, true);
    if(data.state === 'ok'){
      yield put(bookPromoCodeSuccess(1,data.percent));
      notify.success('check completed');
    }
    else{
      notify.error('check error')  
    }
  } catch (err) {
    notify.error('check error')
  }
}

export function* completeBook(action) {
  try {
    const data = yield call(request, 'book/complete', 'POST', action.id, true);
    yield put(getCurrentBooks());
    notify.success('book completed');
  } catch (err) {
    notify.error('book complete error')
  }
}

export function* acceptBook(action) {
  try {
    const data = yield call(request, 'book/accept', 'POST', action.id, true);
    yield put(getCurrentBooks());
    notify.success('book accepted');
  } catch (err) {
    notify.error('book accept error')
  }
}

export function* cancelBook(action) {
  try {
    const data = yield call(request, 'book/cancel', 'POST', action.id, true);
    yield put(getCurrentBooks());
    notify.success('book canceled');
  } catch (err) {
    notify.error('book cancel error')
  }
}

export function* bookCreate(action) {
  try {
    const data = yield call(request, 'book/create', 'POST', action.data, true);
    yield put(bookCreateSuccess(data));
    history.push('/profile');
    notify.success('book created successfully')
  } catch (err) {
    notify.error('book create error')
  }
}

export function* getCurrentBook() {
  try {
    const data = yield call(request, 'book/current', 'GET', null, true);
    yield put(getBooksSuccess(data));
  } catch (err) {
    notify.error('book current get error')
  }
}

export function* getPreviousBook() {
  try {
    const data = yield call(request, 'book/previous', 'GET', null, true);
    yield put(getBooksSuccess(data));
  } catch (err) {
    notify.error('book previous get error')
  }
}

export function* requestDataGet(action) {
  try {
    const data = yield call(request, 'book/previous', 'GET', null, true);
    yield put(getBooksSuccess(data));
  } catch (err) {
    notify.error('book previous get error')
  }
}

export default [
  fork(takeLatest, CONSTANTS.BOOK_STORAGE_GET, bookStorageGet),
  fork(takeLatest, CONSTANTS.BOOK_PROMO_CODE_CHECK, promoCodeCheck),
  fork(takeLatest, CONSTANTS.BOOK_COMPLETE, completeBook),
  fork(takeLatest, CONSTANTS.BOOK_ACCEPT, acceptBook),
  fork(takeLatest, CONSTANTS.BOOK_CANCEL_BOOK, cancelBook),
  fork(takeLatest, CONSTANTS.BOOK_GET_CURRENT, getCurrentBook),
  fork(takeLatest, CONSTANTS.BOOK_GET_PREVIOUS, getPreviousBook),
  fork(takeLatest, CONSTANTS.BOOK_CREATE, bookCreate)
]
