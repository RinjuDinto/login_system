import { createStore } from 'redux'
import LoginReducer from './Login/LoginReducer'; // Import your root reducer

const store = createStore(LoginReducer)

export default store;