import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
const App = () => {
  const [sentence, setSentence ] = useState('');

  const calcul = () => {
    if( sentence.trim() !='' ){
      return sentence.split(' ') // sépare les mots
        .filter( word => word != '') // retire les espaces
        .map( word => word.length ) // les mots seuls pour calculer la longueur
        .join(' '); // transforme en chaîne de caractères
    }

    return '';
  }

  return (
    <View style={styles.container}>
     <View style={styles.blue}>
      <Text>Saisir le texte</Text>
      <TextInput
        style={{height : 40, borderColor : 'gray', borderWidth : 1}}
        onChangeText={setSentence}
       />
     </View>
     { calcul() != '' && (
       <View style={styles.sky}>
          <Text>{calcul()}</Text>
       </View>
     )}
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        padding : 10
    },
    blue: {
        height: 80,
        backgroundColor: 'powderblue',
        padding : 10
    },
    sky: {
        height: 50,
        width: 500,
        backgroundColor: 'skyblue',
        padding: 10, fontSize: 42
    }
});