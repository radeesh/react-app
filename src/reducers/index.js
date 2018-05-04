import { combineReducers } from "redux";
import login from "./LoginReducer";
import account from "./AccountReducer";

export default combineReducers({
  //mapped to state.login
  login,
  account
});