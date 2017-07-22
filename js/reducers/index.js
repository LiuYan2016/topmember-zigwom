import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import notification from './notification';
import drawer from "./drawer";
import user from "./user";
import list from "./list";

export default combineReducers({
  form: formReducer,
  drawer,
  user,
  notification,
  list
});
