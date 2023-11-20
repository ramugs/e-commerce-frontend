import { combineReducers } from "redux";
import { loginReduer } from "./admin";

const rootReducer = combineReducers({
  loginReduer,
});

export default rootReducer;
