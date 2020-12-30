import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { reset } from "../actions/actions-types";

import Styles from "../Styles";

const Favorite = (props) => {
  const { choices } = useSelector((state) => {
    return state.v;
  });

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={Styles.container}>
      <View>
        <FlatList
          data={choices}
          renderItem={({ item }) => (
            <Text
              style={[Styles.btn, { backgroundColor: "#000", color: "white" }]}
            >
              {item}
            </Text>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <TouchableOpacity onPress={() => dispatch(reset())}>
          <Text style={Styles.btnReset}>Reset</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Favorite;
