import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { ContainerStudent } from "../Styles/Elems";

import { average } from '../actions/actions-types';

// avec le spread de student on récupère les clés du littéral facilement par décomposition
const Student = ({ navigation, id, name, attendance, lessons, notes }) => {

  return (
    // Abscence est la clé définie dans la Stack du module react-navigation, la méthode
    // navigate peut accepter des paramètres , deuxième argument voir ci dessous :
    <TouchableOpacity onPress={() => navigation.navigate("Abscence", { id })}>
      <ContainerStudent attendance={attendance} >
        <View style={{ width: 110 }}>
          <Image
            source={{ uri: `http://lorempixel.com/100/100/cats/${id}` }}
            style={{ width: 100, height: 100, marginRight: 10 }}
          />
        </View>
        <View style={{ width: 200 }}>
          <Text>{name}</Text>
          <Text style={{ padding: 2, marginBottom: 2 }}>
            Nombre d'abscence(s) {attendance}
          </Text>
          <Text style={{ padding: 2, marginBottom: 2 }}>
            Nombre de cours {lessons ? lessons.lenght : 0}
          </Text>
          <Text style={{ padding: 2, marginBottom: 2 }}>
            Moyenne : {notes ? average(notes) : 'aucune note'}
          </Text>
         
        </View>
      </ContainerStudent>
    </TouchableOpacity>
  );
};

export default Student;
