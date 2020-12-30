import React from "react";
import { ItemMenu, Container } from "../Styles/Elems";

// Construction des menus
const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <ItemMenu
        onPress={() => navigation.navigate("Students")}
        title="Students"
        active={false}
      />
    </Container>
  );
};

export default HomeScreen;