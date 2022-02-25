import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "./index.css";
import { pokemonReducer } from "./reducers/pokemonReducer";
import { logActions, reportError } from "./middlewares";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeEnhancers(
  applyMiddleware(thunk, logActions, reportError)
);

const store = createStore(pokemonReducer, composedEnhancers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
