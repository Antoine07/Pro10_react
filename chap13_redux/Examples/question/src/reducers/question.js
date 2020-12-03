
import { ON_CHANGE, ADD_QUESTION } from '../constants/actions';

const stateInit = {
  count: 0,
  questions: [],
  question: "", // Contrôle de la saisi
  message : ''
};

const reducer = (state = stateInit, action) => {
  switch (action.type) {

    case ADD_QUESTION:
        if(state.question.trim() === ''){

            return {
                ...state,
                message : "Attention votre champ est vide"
            }
        }
      return {
        ...state,
        questions: state.questions.concat(state.question),
        count: state.count + 1,
        message : 'Merci pour votre question',
        question : ''
      };

    case "INCREMENT_COUNT":
      return {
        ...state,
        count: state.count + action.num,
      };

    case ON_CHANGE:
      const { name, value } = action.payload;

      return {
        ...state,
        [name]: value, // ajout de la question et autre(s) champ(s) dynamiquement
        message : ''
      };

    // Si aucun changement de state
    default:
      return state;
  }
};

export default reducer;
