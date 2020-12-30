import {  StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      marginTop: 50,
      spaceAround : 5
    },
    btn: {
      color: 'black',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      textAlign: 'center',
      backgroundColor: '#f9c2ff'
    },
    btnReset: {
      color: 'white',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      textAlign: 'center',
      backgroundColor: '#333'
    }
  });

  export default Styles;