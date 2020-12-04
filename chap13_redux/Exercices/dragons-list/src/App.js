import { Grid, Cell } from "styled-css-grid";
import { useDispatch, useSelector } from "react-redux";

import { Fragment } from "react";

import Button from "./Styles/Button";
import {
  add_dragon,
  add_history,
  delete_dragon,
  reverse_dragon,
  set_dragon,
  set_knight,
  add_knight
} from "./actions/actions-types";

const App = () => {
  // les constantes par décomposition (voir ce que vous retournez dans le state)
  const {
    count,
    dragon,
    dragons,
    messageDragon,
    history,
    knight,
    knights,
    messageKnight,
  } = useSelector((state) => {
    return {
      // chaque clé/valeur retournée est assigné aux constantes
      count: state.dragon.count,
      dragon: state.dragon.dragon,
      dragons: state.dragon.dragons,
      messageDragon: state.dragon.message,

      history: state.history.history,

      knight: state.knight.knight,
      knights: state.knight.knights,
      messageKnight: state.knight.message,
    };
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value, name } = e.target;

    if (name === "dragon") dispatch(set_dragon({ name, value }));
    if (name === "knight") dispatch(set_knight({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name } = e.target;

    if (name === "dragon") dispatch(add_dragon());
    if (name === "knight") dispatch(add_knight());

    // history 
    if (dragon.trim() === "" && knight.trim() === "") return;

    // on arrive ici si un des deux champs n'est pas vide 
    const date = new Date();
    const status = "add";
    dispatch(add_history({ dragon, date, status }));
  };

  const handleDelete = (dragon) => {
    dispatch(delete_dragon({ dragon })); // { dragon } <=> { dragon : "Alan" }

    // history
    const date = new Date();
    const status = "delete";
    dispatch(add_history({ dragon, date, status }));
  };

  const handleReverse = () => {
    dispatch(reverse_dragon());
  };

  return (
    <Grid columns={"1fr 1fr"} rows={"minmax(45px,auto) 1fr minmax(45px,auto)"}>
      <Cell width={2}>
        <h1>Nombre de dragon(s) : {count}</h1>
      </Cell>

      <Cell>
        {messageDragon && <p>{messageDragon}</p>}
        <form onSubmit={handleSubmit} name="dragon">
          <div>
            <input
              type="text"
              name="dragon"
              value={dragon}
              onChange={handleChange}
            />
          </div>
          <Button>Add dragon</Button>
        </form>

        <form onSubmit={handleSubmit} name="knight">
          {messageKnight && <p>{messageKnight}</p>}
          <div>
            <input
              type="text"
              name="knight"
              value={knight}
              onChange={handleChange}
            />
          </div>
          <Button>Add knight</Button>
        </form>
      </Cell>
      <Cell>
        <Button onClick={handleReverse}>reverse</Button>
        <ul>
          {dragons.map((dragon, i) => (
            <Fragment key={i}>
              <li>{dragon}</li>
              <Button onClick={() => handleDelete(dragon)}>Delete</Button>
            </Fragment>
          ))}
        </ul>
        <ul>
          {knights.map((knight, i) => (
            <Fragment key={i}>
              <li>{knight}</li>
            </Fragment>
          ))}
        </ul>
      </Cell>
      <Cell width={2}>
        {history.length > 0 && (
          <ul>
            {history.map((h, i) => (
              <li key={i}>
                Name : {h.dragon} Date : {h.date.toLocaleString()} Status :{" "}
                {h.status}
              </li>
            ))}
          </ul>
        )}
        
      </Cell>
    </Grid>
  );
};

export default App;
