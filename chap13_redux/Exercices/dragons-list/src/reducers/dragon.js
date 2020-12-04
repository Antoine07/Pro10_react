import {
  ON_CHANGE,
  ADD_DRAGON,
  DELETE_DRAGON,
  REVERSE_DRAGON,
} from "../constants/actions";

const stateInit = {
  dragons: ["Apalala", "Balaur", "Bolla"],
  count: 3,
  dragon: "",
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

    case ADD_DRAGON:
      if (state.dragon.trim() === "") {
        return {
          ...state,
          message: "Attention votre champ est vide",
        };
      }

      if (
        state.dragons
          .map((dragon) => dragon.toLowerCase())
          .includes(state.dragon.toLowerCase())
      ) {
        return {
          ...state,
          message: `Attention le dragon : ${state.dragon} existe déjà dans la liste`,
        };
      }

      /*
            const dragons = [ ...state.dragons, state.dragon ]
            console.log([ ...state.dragons, state.dragon ]);
        */

      return {
        ...state,
        dragons: state.dragons.concat(state.dragon), // renvoi un nouveau tableau
        message: "Merci pour votre ajout",
        dragon: "",
      };

    case DELETE_DRAGON:
      const { dragon } = action.payload;

      return {
        ...state,
        dragons: state.dragons.filter((d) => d !== dragon), // filter renvoie un nouveau tableau pas la peine de faire un spread
      };

    case REVERSE_DRAGON:

      const dragons = [ ...state.dragons ]; // copy peu profonde
      dragons.sort(() => Math.random() - 0.5);

      return {
        ...state,
        dragons: dragons, 
      };

    default:
      return state;
  }
};

export default reducer;
