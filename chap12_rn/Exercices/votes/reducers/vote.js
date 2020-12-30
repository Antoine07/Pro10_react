import { CHOICE, RESET } from "../constants/actions";

const stateInit = {
  candidates: [
    { choice_1: "Alan", choice_2: "Juliette" },
    { choice_1: "Phi", choice_2: "Bernard" },
    { choice_1: "Lisa", choice_2: "Elise" },
    { choice_1: "Cecilia", choice_2: "Alice" },
  ],
  count: 0,
  choices: [],
};

const reducer = (state = stateInit, action) => {
  switch (action.type) {
    case CHOICE:
      const { value, key } = action.payload;

      return {
        ...state,
        choices: state.choices.concat(value),
        count: state.count + 1,
      };

    case RESET:

      return {
          ...state,
          count : 0,
          choices : []
      }

    default:
      return state;
  }
};

export default reducer;
