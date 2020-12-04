// on combine ici nos reducers

import { combineReducers } from "redux";

import counter from "./counter";

export default combineReducers({
  c : counter
});
