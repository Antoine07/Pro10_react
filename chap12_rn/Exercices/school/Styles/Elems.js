import React from "react";
import styled from "styled-components/native";

import { TouchableOpacity, Text, SafeAreaView, View } from "react-native";

const ButtonContainer = styled.TouchableOpacity`
  margin-vertical: 40px;
  background-color: ${(props) => (props.disabled ? "#CCC" : "#222")};
  border-radius: 5px;
  padding: 10px;
  margin: 20px;
`;
const ButtonText = styled.Text`
  font-size: 20px;
  text-align: center;
  color: #fff;
`;

export const ItemMenu = ({ onPress, title, active }) => (
  <ButtonContainer onPress={onPress} disabled={active}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

export const ContainerStudent = styled.View`
  width: 350px;
  background-color: ${(props) => (props?.attendance >= 5 ? "#CCC" : "#f9c2ff")};
  padding: 20px;
  margin-vertical: 8px;
  margin-horizontal: 16px;
`;