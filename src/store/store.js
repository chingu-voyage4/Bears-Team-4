import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import searchReducer from "../reducers/searchReducer";
import storesReducer from "../reducers/storesReducer";
import trendingReducer from "../reducers/storesReducer";
import defaultState from "./defaultState";

const rootReducer = combineReducers({
  search: searchReducer,
  stores: storesReducer,
  trending: trendingReducer
});

const middlewares = applyMiddleware(thunk, logger);

// Just For Redux Dev Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  defaultState,
  composeEnhancers(middlewares)
);

export default store;
