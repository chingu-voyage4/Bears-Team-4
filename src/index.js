import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import store from "./store/store"; // Redux Store.

import "./index.css";

/**
 * <Provider> - Wrapper for Redux Store. It inject Redux Store to every component.
 * <BrowserRouter> - Wrapper for React-Router. It handle routing.
 * <App> - Contain Whole react app.
 **/

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
