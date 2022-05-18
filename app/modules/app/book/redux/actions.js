import * as CONSTANTS from './constants';

export function bookStorageGet() {
  return {
    type: CONSTANTS.BOOK_STORAGE_GET,
  }
}

export function bookStorageGetSuccess(data) {
  return {
    type: CONSTANTS.BOOK_STORAGE_GET_SUCCESS,
    data,
  }
}

export function bookPromoCodeSuccess(flag,percent) {
  return {
    type: CONSTANTS.BOOK_PROMO_CODE_SUCCESS,
    flag,
    percent,
  }
}

export function bookPromoCodeCheck(data) {
  return {
    type: CONSTANTS.BOOK_PROMO_CODE_CHECK,
    data,
  }
}

export function bookInitialDataSet(data) {
  return {
    type: CONSTANTS.BOOK_INITIAL_DATA_SET,
    data,
  }
}

export function completeBook(id) {
  return {
    type: CONSTANTS.BOOK_COMPLETE,
    id,
  }
}

export function acceptBook(id) {
  return {
    type: CONSTANTS.BOOK_ACCEPT,
    id,
  }
}

export function cancelBook(id) {
  return {
    type: CONSTANTS.BOOK_CANCEL_BOOK,
    id,
  }
}

export function getBooksSuccess(data) {
  return {
    type: CONSTANTS.BOOK_GET_BOOKS_SUCCESS,
    data,
  }
}

export function getCurrentBooks() {
  return {
    type: CONSTANTS.BOOK_GET_CURRENT,
  }
}

export function getPreviousBooks(){
  return {
    type: CONSTANTS.BOOK_GET_PREVIOUS,
  }
}

export function bookRequestDataSet(data,clear=0){
  return {
    type: CONSTANTS.BOOK_REQUEST_DATA_SET,
    data,
    clear,
  }
}

export function bookAddPartner(flag){
  return {
    type: CONSTANTS.BOOK_ADD_PARTNER,
    flag,
  }
}

export function bookSetCurrentType(type){
  return {
    type: CONSTANTS.BOOK_SET_CURRENT_TYPE,
    flag: type,
  }
}

export function bookRequest() {
  return {
    type: CONSTANTS.BOOK_REQUEST,
  }
}

export function bookRequestSuccess() {
  return {
    type: CONSTANTS.BOOK_REQUEST_SUCCESS,
  }
}

export function bookCreate(data) {
  return {
    type: CONSTANTS.BOOK_CREATE,
    data,
  }
}

export function bookCreateSuccess() {
  return {
    type: CONSTANTS.BOOK_CREATE_SUCCESS,
  }
}