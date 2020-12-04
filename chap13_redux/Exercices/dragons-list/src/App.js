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
} from "./actions/actions-types";

const App = () => {
  const { count, dragon, dragons, message, history } = useSelector((state) => {
    return {
      count: state.dragon.count,
      dragon: state.dragon.dragon,
      dragons: state.dragon.dragons,
      message: state.dragon.message,
      history: state.history.history,
    };
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value, name } = e.target;

    dispatch(set_dragon({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(add_dragon());

    // history
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
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="dragon"
              value={dragon}
              onChange={handleChange}
            />
          </div>
          <Button>Add</Button>
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
      </Cell>
      <Cell width={2}>
        { history.length > 0 && (
          <ul>
            {history.map((h, i) => <li key={i}>Name : {h.dragon} Date : {h.date.toLocaleString()} Status : {h.status}</li>)}
          </ul>
        )}
      </Cell>
    </Grid>
  );
};

export default App;
