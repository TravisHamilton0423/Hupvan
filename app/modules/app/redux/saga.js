import bookSaga from '../book/redux/saga';
// import profileSaga from '../profile/redux/sagas';

export default function* appSaga() {
  yield []
    .concat(bookSaga)
    // .concat(profileSaga)
}
