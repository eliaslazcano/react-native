/* eslint-disable prettier/prettier */
/**
 * @format
 * @flow strict-local
 */

 //Importações
import React from 'react';
import {View, Text, Platform, StyleSheet} from 'react-native';

//Valores
const nome = 'Elias Neto';
const plataforma = Platform.select({
  android: 'Estou usando Android',
  ios: 'Estou usando iOS'
});

//Componentes
const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aprendendo React Native</Text>
      <Text style={styles.subtitulo}>{nome}</Text>
      <Text style={styles.subtitulo}>{plataforma}</Text>
    </View>
  );
};

//Ajustes de layout (folha de estilo)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  titulo: {
    fontSize: 20
  },
  subtitulo: {
    color: '#666666'
  }
});

export default App;
