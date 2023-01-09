import { applyMiddleware, compose, createStore } from "redux";
import createDebounce from "redux-debounced";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../rootReducer";
import rootSaga from "../rootSaga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// ** init middleware
const middleware = [sagaMiddleware, createDebounce()];

// ** Dev Tools
const composeEnhancers =
  window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

// ** Create store
const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

export { store };
