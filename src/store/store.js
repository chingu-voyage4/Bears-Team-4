import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import searchReducer from "../reducers/searchReducer";

const rootReducer = combineReducers({
  search: searchReducer
});

const defaultState = {
  search: {
    searchTerm: "",
    recent: [],
    suggestion: ["kfc", "macdonalds", "pizza hut", "dominos"]
  }
};

const middlewares = applyMiddleware(thunk, logger);

// Just For Redux Dev Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  defaultState,
  composeEnhancers(middlewares)
);

export default store;
