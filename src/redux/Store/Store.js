import React from "react";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../Reducer/rootReducer";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer);
export default store;
