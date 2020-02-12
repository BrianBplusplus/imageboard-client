import { combineReducers } from "redux";
import images from "./images/reducer";
import user from "./users/reducer";
export default combineReducers({
  images,
  user
});
