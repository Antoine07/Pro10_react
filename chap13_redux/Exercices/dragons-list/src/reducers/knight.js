import { ON_CHANGE, ADD_KNIGHT } from "../constants/actions";

const stateInit = {
  knights: [],
  count: 0,
  knight: "",
  message: "",
};

const reducer = (state = stateInit, action) => {
  switch (action.type) {
    case ON_CHANGE:
      const { name, value } = action.payload;

      return {
        ...state,
        [name]: value,
        message: "",
      };

    case ADD_KNIGHT:
      if (state.knight.trim() === "") {
        return {
          ...state,
          message: "Attention votre champ est vide",
        };
      }

      if (
        state.knights
          .map((knight) => knight.toLowerCase())
          .includes(state.knight.toLowerCase())
      ) {
        return {
          ...state,
          message: `Attention le knight : ${state.knight} existe déjà dans la liste`,
        };
      }

      return {
        ...state,
        knights: state.knights.concat(state.knight), // renvoi un nouveau tableau
        message: "Merci pour votre ajout",
        knight: "",
      };

    default:
      return state;
  }
};

export default reducer;
