import { APP_REQUEST_USER_DATA, APP_SET_AUTH, APP_SET_USER_DATA } from './types';

const initialState = {
  auth: {},
  userData: {},
};

export default (state = initialState, action) => {
  const {type} = action;
  switch(type) {
    case APP_SET_AUTH:
      return Object.assign({}, state, {
        auth: action.payload
      });
    case APP_SET_USER_DATA:
      return Object.assign({}, state, {
        userData: action.payload
      })
    default:
      return state;
  }
}