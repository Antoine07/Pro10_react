import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { load_users, start_counter } from "./actions/actions-types";

const App = () => {
  const { count, users } = useSelector((state) => state.c); // attention j'ai mis un combineReducers
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(start_counter());

    dispatch(load_users());
  }, []);

  return (
    <div className="App">
      <p>Counter : {count}</p>
      { users.length > 0 && (
        <ul>
          { users.map((user, i) => <li key={i}>{user.name}</li>)}
        </ul>
      )}
    </div>
  );
};

export default App;
