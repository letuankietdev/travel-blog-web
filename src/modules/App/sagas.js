import { call, put, takeEvery, all } from 'redux-saga/effects'
import { APP_REQUEST_USER_DATA } from './types';

function* requestGetUserData(action) {
  try {
    console.log('saga request get User Data')
  }catch(error) {
    console.log('error', error);
  }
}


function* appSaga(){
  yield all([
    yield takeEvery(APP_REQUEST_USER_DATA, requestGetUserData)
  ])
}

export default appSaga;