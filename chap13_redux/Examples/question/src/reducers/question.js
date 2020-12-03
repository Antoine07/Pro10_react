const stateInit = {
  count: 0,
  questions: [],
  question : '' // Contrôle de la saisi
};

const reducer = (state = stateInit, action) => {
  switch (action.type) {
    case "ADD_QUESTION":
      return {
        ...state,
        questions: state.questions.concat(action.question),
        count: state.count + 1,
      };

    case "INCREMENT_COUNT": 

      return {
          ...state, 
          count : state.count + action.num
      }

    // Si aucun changement de state
    default:
      return state;
  }
};

export default reducer;