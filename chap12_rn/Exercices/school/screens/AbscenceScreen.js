import React, { useEffect } from "react";
import { ItemMenu, Container, ContainerStudent } from "../Styles/Elems";
import { Text, View } from "react-native";

import { useDispatch, useSelector } from "react-redux";

import {get_student, increment_attendance, decrement_attendance} from '../actions/actions-types';

// Construction des menus
// l'objet route nous permet de récupérer les paramètres de la route
const AbscenceScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { student } = useSelector((state) => state.s);
  const { id } = route.params;

  useEffect(() => {
    dispatch(get_student(id));
  }, [id]);

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
      <ItemMenu
        onPress={() => dispatch(increment_attendance(id))}
        title="Increment +1"
        active={false}
      />
      <ItemMenu
        onPress={() => dispatch(decrement_attendance(id))}
        title="Increment -1"
        active={ student?.attendance === 0}
      />
      {student && (
        <ContainerStudent>
          <View style={{ width: 200 }}>
            <Text>{student.name}</Text>
            <Text style={{ padding: 2, marginBottom: 2 }}>
              Nombre d'abscence(s) {student.attendance}
            </Text>
          </View>
        </ContainerStudent>
      )}
    </Container>
  );
};

export default AbscenceScreen;
