import { SAVE_LOGIN_STATUS } from './Types'

const initialState = {
  isAuthenticated:  localStorage.getItem('isAuthenticated'),
  userName: localStorage.getItem('userName'),
};

const loginReducer = (state = initialState, action) => { 
  switch (action.type) {
    case SAVE_LOGIN_STATUS:
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        userName: action.payload.userName
      };

    default:
      return state;
  }
};

export default loginReducer;