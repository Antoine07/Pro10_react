import { INCREMENT, SET_USERS } from "../constants/actions";

const stateInit = {
  count: 0,
  users: [],
};

const reducer = (state = stateInit, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case SET_USERS:
      const { users } = action.payload;

      return {
        ...state,
        users: state.users.concat(users),
      };

    default:
      return state;
  }
};

export default reducer;
