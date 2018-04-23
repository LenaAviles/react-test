import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import questions from "../reducers/questions";
import categories from "../reducers/categories";
import navigation from "../reducers/navigation";

const store = createStore(
  combineReducers({ questions, categories, navigation }),
  applyMiddleware(thunk)
);

export default store;