import React from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { createStore } from "redux";
import { useDispatch, useSelector, Provider } from "react-redux";
import reducer from "./reducers/index";
import Favorite from "./components/Favorite";
import Styles from "./Styles";

import { add_choice } from './actions/actions-types';

// Importer le reducer, Provider et createStore
// importer react-redux useSelector & useDispatch

const store = createStore(reducer);

const Home = () => {
  const { candidates, count } = useSelector((state) => {
    return state.v;
  });

  const dispatch = useDispatch();

  if (count < candidates.length) {
    const choices = candidates[count];
    const Choices = [];
    for (const c in choices) Choices.push({ value: choices[c], key: c });

    return (
      <SafeAreaView style={Styles.container}>
        <FlatList
          data={Choices}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => dispatch(add_choice(item))}
              >
                <Text style={Styles.btn}> Choice {item.value} </Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => index.toString() }
        />
      </SafeAreaView>
    );
  }

  return <Favorite />;
};

const App = (props) => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default App;