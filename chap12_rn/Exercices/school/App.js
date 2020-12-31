import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import StudentsScreen from "./screens/StudentsScreen";
import HomeScreen from "./screens/HomeScreen";
import AbscenceScreen from "./screens/AbscenceScreen";

import createStore from "./store/createStore";
import { Provider } from "react-redux";
const store = createStore();

console.log(store.getState());

const Stack = createStackNavigator();

const Nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Students" component={StudentsScreen} />
        <Stack.Screen name="Abscence" component={AbscenceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => (
  <Provider store={store}>
    <Nav />
  </Provider>
);

export default App;