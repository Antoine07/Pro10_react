import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
const App = () => {
  const [sentence, setSentence] = useState('');

  const calcul = () => {
    if (sentence.trim() != '') {
      return sentence
        .split(' ') // sépare les mots
        .filter((word) => word != '') // retire les espaces
        .map((word) => word.length) // les mots seuls pour calculer la longueur
        .join(' '); // transforme en chaîne de caractères
    }

    return '';
  };

  const onClean = () => setSentence('');

  const onReverse = () => {
    if (sentence.trim() != '') {
      setSentence(
        sentence
          .split(' ')
          .filter((word) => word != '')
          .map((word) => word.split('').reverse().join(''))
          .join(' ')
      );
    }

    return '';
  };

  return (
    <View style={styles.container}>
      <View style={styles.blue}>
        <Text>Saisir le texte</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={setSentence}
          value={sentence}
        />
      </View>
      {calcul() !== '' && (
        <View style={styles.sky}>
          <Text>{sentence}</Text>
          <Text>{calcul()}</Text>
        </View>
      )}
      <View style={styles.btn}>
        <Button
          onPress={onClean}
          title="Clear"
          color="#000"
          accessibilityLabel="Clean sentense"
        />
      </View>
      <View style={styles.btn}>
        <Button
          onPress={onReverse}
          title="Reverse"
          color="#000"
          disabled={sentence === ''}
          accessibilityLabel="Reverse sentense"
        />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  blue: {
    height: 80,
    width: 300,
    backgroundColor: 'powderblue',
    padding: 10,
  },
  sky: {
    height: 50,
    width: 300,
    backgroundColor: 'skyblue',
    padding: 10,
    fontSize: 42,
  },
  btn: {
    height: 60,
    width: 150,
    margin: 5,
    backgroundColor: 'gray',
    padding: 10,
    fontSize: 42,
  },
});
