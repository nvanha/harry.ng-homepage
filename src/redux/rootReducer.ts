import { combineReducers } from "redux";

import auth from "./auth/reducer";
import works from "./works/reducer";

const rootReducer = combineReducers({
  auth,
  works,
});

export default rootReducer;
