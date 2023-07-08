import { SAVE_LOGIN_STATUS } from './Types';

export const handleSuccessLogin = (user) => ({
  type: SAVE_LOGIN_STATUS,
  payload: user,
});

export const handlelogout = () => ({
  type: SAVE_LOGIN_STATUS,
  payload: {
    isAuthenticated: false,
    userName: ''
  }
});
