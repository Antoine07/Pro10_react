import {
  GET_STUDENT,
  INCREMENT_ATTENDANCE,
  DECREMENT_ATTENDANCE,
} from "../constants/actions";

import { deepCopyStudents } from '../actions/actions-types';

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
  behaviours: [],
  order: false,
  student: null,
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
      // copie profonde de l'objet students dans le state
      newStudents = deepCopyStudents(state);
      newStudents.map(student => {
          if(student.id === action.payload){
              student.attendance++;
              newStudent = student;
          }

          return student;
      })

      return {
        ...state,
        students: newStudents,
        student : newStudent
      };

      case DECREMENT_ATTENDANCE:
        newStudents = deepCopyStudents(state);
        newStudents.map(student => {
          if(student.id === action.payload && student.attendance > 0){
              student.attendance--;
          }

          if(student.id === action.payload) newStudent = student;

          return student;
      })

        return {
          ...state,
          students: newStudents,
          student : newStudent
        }

    default:
      return state;
  }
};

export default reducer;
