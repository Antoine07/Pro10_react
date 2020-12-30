import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { ItemMenu, Container } from "../Styles/Elems";
import { useSelector } from "react-redux";
import Student from "../components/Student";

const StudentsScreen = ({ navigation }) => {
  const { students } = useSelector((state) => state.s);
  return (
    <Container>
      <ItemMenu onPress={() => navigation.navigate("Home")} title="Home" />
      <ItemMenu
        onPress={() => navigation.navigate("Students")}
        title="Students"
        active={true}
      />
      <FlatList
        data={students}
        renderItem={({ item: student }) => {
          return <Student {...student} navigation={navigation} />;
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </Container>
  );
};

export default StudentsScreen;
