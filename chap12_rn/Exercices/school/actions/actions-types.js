import {
  GET_STUDENT,
  INCREMENT_ATTENDANCE,
  DECREMENT_ATTENDANCE,
  TOGGLE_ORDER_NOTES,
  RESET,
  SET_BEHAVIOURS
} from "../constants/actions";

export const get_student = (payload) => {
  return {
    type: GET_STUDENT,
    payload,
  };
};

export const increment_attendance = (payload) => {
  return {
    type: INCREMENT_ATTENDANCE,
    payload,
  };
};

export const decrement_attendance = (payload) => {
  return {
    type: DECREMENT_ATTENDANCE,
    payload,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};

export const order_notes = () => {

  return { type: TOGGLE_ORDER_NOTES };
}

export const set_behaviours = () => {

  return { type: SET_BEHAVIOURS };
}

// les notes et la partie décimale pour la précision
// 100 => deux chiffres après la virgule
const average = (notes, decimal = 100) => {
  if (notes.length === 0) return null;

  return (
    Math.floor(
      (notes.reduce((curr, acc) => curr + acc) / notes.length) * decimal
    ) / decimal
  );
};

const deepCopyStudents = (state) =>
  // on fait une copie de chaque student dans le littéral students du state
  // pensez bien dans les arrow function à retourner le littéral dans une expression ()
  state.students.map((s) => ({ ...s, notes: [...s.notes] }));

const setMention = (attentance) => {
  switch (true) {
    case attentance === 0:
      return 'A';

    case attentance >= 1 && attentance <= 2:
      return 'B';

    case attentance >= 3 && attentance <= 5:
      return 'C';

    default:
      return 'D';
  }
}

// En fonction des données, il faudrait peut être revoir la structure pour les abscences.
// Pour l'instant pour la gestion des abscences on les fait dans la clé du littéral behaviors
const getMention = (student, behaviors) => {

  // si non faux ?? et sinon ( on fait ce qu'il y a dans le ternaire )
  return behaviors.get(student.id) ?? (student.attendance === 0 ? 'A' : 'Aucune mention');
}

export { average, deepCopyStudents, setMention, getMention };