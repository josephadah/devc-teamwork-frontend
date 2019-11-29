import { combineReducers } from "redux";
import layoutReducer from "./layout";
import userReducer from "./user";

export default combineReducers({
  layout: layoutReducer,
  user: userReducer
});
