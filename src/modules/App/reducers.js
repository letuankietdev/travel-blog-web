import { APP_REQUEST_USER_DATA, APP_SET_AUTH, APP_SET_USER_DATA } from './types';

const initialState = {
  auth: {},
  userData: {},
};

export default (state = initialState, action) => {
  const {type} = action;
  console.log('qweqweqweqweqwe', type);
  switch(type) {
    case APP_SET_AUTH:
      console.log('12312312313123', Object.assign({}, state, {
        auth: action.payload
      }))
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