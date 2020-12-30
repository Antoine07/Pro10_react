import {
   
} from '../constants/actions';

// les notes et la partie décimale pour la précision
// 100 => deux chiffres après la virgule
const average = (notes, decimal = 100) => {

    if (notes.length === 0) return null;

    return Math.floor((notes.reduce((curr, acc) => curr + acc) / notes.length) * decimal) / decimal;
}

const deepCopyStudents = state => state.students.map(s => ({ ...s, notes : [ ...s.notes ] }));

export { average, deepCopyStudents };