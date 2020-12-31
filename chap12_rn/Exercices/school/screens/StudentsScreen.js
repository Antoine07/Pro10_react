import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { ItemMenu, Container } from "../Styles/Elems";
import { useDispatch, useSelector } from "react-redux";
import Student from "../components/Student";
import { order_notes, reset, getMention } from "../actions/actions-types";

const StudentsScreen = ({ navigation }) => {
  const { students, order, behaviours } = useSelector((state) => state.s);
  const dispatch = useDispatch();

  return (
    <Container>
      <ItemMenu onPress={() => navigation.navigate("Home")} title="Home" />
      <ItemMenu
        onPress={() => navigation.navigate("Students")}
        title="Students"
        active={true}
      />
      <ItemMenu onPress={() => dispatch(reset())} title="Ré-initialiser les abscences" />
      <ItemMenu onPress={() => dispatch(order_notes())} title={'Ordre notes ' + (order === true ? 'Croissant' : 'Décroissant')} />
      <FlatList
        data={students}
        renderItem={({ item: student }) => {
          const mention = getMention(student, behaviours) ;

          return <Student {...student} navigation={navigation} mention={mention} />;
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </Container>
  );
};

export default StudentsScreen;