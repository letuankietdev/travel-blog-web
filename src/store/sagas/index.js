import appSaga from 'modules/App/sagas';
import { all } from 'redux-saga/effects';

function* rootSaga() {
  yield all([
    appSaga(),
  ])
}

export default rootSaga;