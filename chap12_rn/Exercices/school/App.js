import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import StudentsScreen from "./screens/StudentsScreen";
import HomeScreen from "./screens/HomeScreen";
import AbscenceScreen from "./screens/AbscenceScreen";

import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./reducers/index";

const store = createStore(reducer);
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