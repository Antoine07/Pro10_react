import React from "react";
import { ItemMenu, Container } from "../Styles/Elems";
import { Text} from "react-native";

// Construction des menus
// l'objet route nous permet de récupérer les paramètres de la route
const AbscenceScreen = ({ navigation, route }) => {
  console.log(route.params);
  return (
    <Container>
      <ItemMenu
        onPress={() => navigation.navigate("Home")}
        title="Home"
        active={false}
      />
      <ItemMenu
        onPress={() => navigation.navigate("Students")}
        title="Students"
        active={false}
      />
      <Text> ID </Text>
    </Container>
  );
};

export default AbscenceScreen;
