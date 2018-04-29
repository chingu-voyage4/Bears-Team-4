import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import logger from "redux-logger";

import searchReducer from "../reducers/searchReducer";
import storesReducer from "../reducers/storesReducer";
import couponsReducer from "../reducers/couponsReducer";
import userReducer from "../reducers/userReducer";
import defaultState from "./defaultState";

const rootReducer = combineReducers({
  search: searchReducer,
  stores: storesReducer,
  coupons: couponsReducer,
  user: userReducer
});

const middlewares = applyMiddleware(thunk, promise(), logger);

// Just For Redux Dev Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  defaultState,
  composeEnhancers(middlewares)
);

export default store;
