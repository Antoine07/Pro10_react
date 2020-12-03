import { useDispatch, useSelector } from "react-redux";

// useDispatch permet d'envoyer une action dans le store un dispatch
// useSelector permet de lire le store

import { useEffect } from "react";

/*

  1. Implémentez la possibilité d'ajouter une question dans le store sans sa réponse pour l'instant.

*/

const App = () => {
  // On récupére le gros objet state
  //const state =  useSelector( state => state );

  // ou alors les clés du state
  const { count, questions } = useSelector( state => state);

  // fonction dispatch pour lancer les actions dans le reducer
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type : 'INCREMENT_COUNT', num : 3 }) ;
    }, 1000);
  }, []);

  return (
    <div className="App">
      <p>Hello : {count}</p>
    </div>
  );
};

export default App;
