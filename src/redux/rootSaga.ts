import { all } from "redux-saga/effects";

import auth from "./auth/saga";
import works from "./works/saga";

export default function* rootSaga() {
  yield all([auth(), works()]);
}
