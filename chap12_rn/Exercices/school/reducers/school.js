import {
  GET_STUDENT,
  INCREMENT_ATTENDANCE,
  DECREMENT_ATTENDANCE,
  TOGGLE_ORDER_NOTES,
  RESET
} from "../constants/actions";

import { deepCopyStudents, average } from '../actions/actions-types';

const stateInit = {
  students: [
    {
      id: 1,
      name: "Alice",
      lessons: [1, 2],
      attendance: 0,
      notes: [11, 12, 18],
    },
    { id: 2, name: "Alan", lessons: [3], attendance: 0, notes: [10, 14.5, 11] },
    {
      id: 3,
      name: "Phil",
      lessons: [1, 2, 3],
      attendance: 0,
      notes: [11, 9, 9],
    },
    {
      id: 4,
      name: "Naoudi",
      lessons: [1],
      attendance: 0,
      notes: [14.5, 19, 18],
    },
    { id: 5, name: "Fenley", lessons: [3], attendance: 0, notes: [9, 7, 11] },
  ],
  lessons: [
    { id: 1, title: "React" },
    { id: 2, title: "React Native" },
    { id: 3, title: "MongoDB" },
  ],
  behaviours: new Map(),
  order: false,
  student: null,
  mentions: ['A', 'B', 'C', 'D']
};

const reducer = (state = stateInit, action) => {
  let newStudents = null, newStudent = null;
  switch (action.type) {

    case GET_STUDENT:
      const student = state.students.find((s) => action.payload === s.id);

      return {
        ...state,
        student: { ...student, notes: [...student.notes] },
      };

    case INCREMENT_ATTENDANCE:
    case DECREMENT_ATTENDANCE:
      // copie profonde de l'objet students dans le state
      newStudents = deepCopyStudents(state);

      for(const student of newStudents){
        // les objets student (même ref) ne sont pas des copies donc si vous les modifiez
        // ils le seront également dans newStudents 
        if (student.id === action.payload) {
          if( action.type === INCREMENT_ATTENDANCE ) student.attendance++;
          if( action.type === DECREMENT_ATTENDANCE && student.attendance >= 0 ) student.attendance--;
          newStudent = student;

          break; // refacto optimisation
        };
      }

      return {
        ...state,
        students: newStudents,
        student: newStudent
      };

    case RESET:
      newStudents = deepCopyStudents(state);
      newStudents.map(student => {
        student.attendance = 0;

        return student;
      })

      return {
        ...state,
        students: newStudents // forcera la mise à jour du state car nouvel objet
      }

    case TOGGLE_ORDER_NOTES:
      newStudents = deepCopyStudents(state);
      const sens = state.order === true ? 1 : - 1;

      // array.sort((a, b) => a - b)
      // newStudents.sort((a, b) => (average(a.notes) - average(b.notes) >= 0 ? (1 * sens) : (-1 * sens) ) );
      newStudents.sort((a, b) => sens * (average(a.notes) - average(b.notes)  ) );

      // [a, b, c, d]
      // premiere boucle a
      //  deuxième boucle sur [b,c,d]
      //    if (a > b) 
      //      permute a et b

      // premiere boucle b
      //  deuxième boucle sur [c,d]
      //    if (b > c) 
      //      permute a et b
      
      return {
        ...state,
        students: newStudents,
        order: !state.order
      }

    default:
      return state;
  }
};

export default reducer;