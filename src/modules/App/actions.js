import { APP_SET_AUTH, APP_SET_USER_DATA } from './types';


export const appSetAuth = (payload) => ({
  type: APP_SET_AUTH,
  payload,
});

export const requestGetUserData = (payload) => ({
  type: APP_SET_USER_DATA,
  payload,
})