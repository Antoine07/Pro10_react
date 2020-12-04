// on combine ici nos reducers

import { combineReducers } from "redux";

import dragon from "./dragon";
import history from "./history";
import knight from "./knight";

export default combineReducers({
  //   d: dragon,  // on peut définir des clés plus courtes pour accéder à nos reducers dans l'app
  //   h: history,
  dragon,
  history,
  knight
});
