import {
  ADD_HISTORY
} from "../constants/actions";

const stateInit = {
  history : []
};

const reducer = (state = stateInit, action) => {
  switch (action.type) {
   
    case ADD_HISTORY:

      return {
        ...state,
        history : state.history.concat( action.payload )
      };

    default:
      return state;
  }
};

export default reducer;