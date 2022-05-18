import * as CONSTANTS from './constants';

const initalState = {
    initialData: {},
    requestData: {},
    addPartnerFlag: 0,
    currentType: 'Home',
    books: [],
    promoFlag: 0,
    promoPercent: 0,
    storages: [],
};

function bookReducer(state = initalState, action) {
  switch (action.type) {
    case CONSTANTS.BOOK_STORAGE_GET_SUCCESS:
        return {
            ...state,
            storages: action.data,
        }
    case CONSTANTS.BOOK_PROMO_CODE_SUCCESS:
        return {
            ...state,
            promoFlag: action.flag,
            promoPercent: action.percent,
        }
    case CONSTANTS.BOOK_INITIAL_DATA_SET:
        return {
            ...state,
            initialData: action.data,
        }
    case CONSTANTS.BOOK_GET_BOOKS_SUCCESS:
        return {
            ...state,
            books: action.data,
        }
    case CONSTANTS.BOOK_REQUEST_SUCCESS:
        return state
    case CONSTANTS.BOOK_REQUEST_DATA_SET:
        let newData;
        if (action.clear === 0){
            newData = {
                ...state.requestData,
            }
        }
        newData = {
            ...newData,
            ...action.data,
        }
        return {
            ...state,
            requestData: newData
        }
    case CONSTANTS.BOOK_ADD_PARTNER:
        return {
            ...state,
            addPartnerFlag: action.flag,
        }
    case CONSTANTS.BOOK_SET_CURRENT_TYPE:
        return {
            ...state,
            currentType: action.flag,
        }
    default:
  }
  return state;
}

export default bookReducer;
