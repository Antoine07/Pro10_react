import { useDispatch, useSelector } from "react-redux";

// useDispatch permet d'envoyer une action dans le store un dispatch
// useSelector permet de lire le store

import { add_question, set_question } from "./actions/actions-types";

/*
  # 01 Exercice 

  1. Implémentez la possibilité d'ajouter une question dans le store sans sa réponse pour l'instant.

  Affichez les questions ajoutées dans App.js

  2. Factorisez proprement les actions, constantes dans les dossiers prévus de Redux

*/

const App = () => {
  const { count, questions, question, message } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(add_question());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // action.payload = { name : name, value : value }
    dispatch(set_question({ name, value }));
  };

  return (
    <div className="App">
      <p>Nombre de question(s) : {count}</p>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="question"
            value={question}
            onChange={handleChange}
          />
        </div>
        <div>
          <button>Add</button>
        </div>
      </form>
      {questions.length > 0 && (
        <ul>
          {questions.map((question, i) => (
            <li key={i}>{question}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
