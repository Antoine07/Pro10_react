const initialState = {
  students: [
    { id: 1, name: "Alice", notes: [11, 12, 18] },
    { id: 2, name: "Alan", notes: [10, 14.5, 11] },
    { id: 3, name: "Phil", notes: [11, 9, 9] },
    { id: 4, name: "Naoudi", notes: [14.5, 19, 18] },
    { id: 5, name: "Fenley", notes: [9, 7, 11] },
  ],
};

// Combien d'objet(s) sont présents dans initialState ?
// 4 niveaux objets profondeurs

// copie peu profonde
const newState = { ...initialState };

// newState.students[0].id = 11;

// console.log(newState);
// console.log(initialState);

// Objectif c'est de travailler sur des copies distincts de students dans initialState

// Exercice faire une copie de telle sorte que l'on puisse changer l'id des students sans les changer dans initialState

const newStateDeepCopy = { students: [] };

for (const student of initialState.students) {
  const { notes } = student;
  newStateDeepCopy.students.push({ ...student, notes: [...notes] });
}

newStateDeepCopy.students[0].id = 11;
newStateDeepCopy.students[0].notes[0] = 15;

console.log(newStateDeepCopy);
console.log(newStateDeepCopy.students[0].notes);
console.log(initialState);
console.log(initialState.students[0].notes);
