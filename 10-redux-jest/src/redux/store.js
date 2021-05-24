import { createStore, combineReducers } from "redux";
import { counterReducer, recordReducer } from "./reducers";

const rootReducer = combineReducers({
  counter: counterReducer,
  record: recordReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
