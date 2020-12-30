import React from 'react';
import { Button, View, Text } from 'react-native';

// Construction des menus
const HomeScreen = ({ navigation })  => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Students"
        onPress={() => navigation.navigate('Students')}
      />
    </View>
  );
}

export default HomeScreen;