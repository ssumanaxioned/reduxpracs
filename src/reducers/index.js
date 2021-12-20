import changeTheNumber from "./IncDec";
import auth from "./auth";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeTheNumber,
  auth
})

export default rootReducer