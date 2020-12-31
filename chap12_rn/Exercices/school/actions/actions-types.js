import {
  GET_STUDENT,
  INCREMENT_ATTENDANCE,
  DECREMENT_ATTENDANCE,
  TOGGLE_ORDER_NOTES,
  RESET
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


export { average, deepCopyStudents };