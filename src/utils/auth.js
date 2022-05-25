import _ from 'lodash';

const { localStorage } = global.window;

const auth = {
  setToken: (token) => {
    localStorage.token = token;
  },

  token: () => localStorage.token,
}

export default auth;
