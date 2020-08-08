/* eslint-disable prettier/prettier */
/**
 * @format
 * @flow strict-local
 */

 //Importações
import React from 'react';
import {View, Text, Image, Platform, StyleSheet, Dimensions} from 'react-native';

//Valores
const nome = 'Elias Neto';
const plataforma = Platform.select({
  android: 'Estou usando Android',
  ios: 'Estou usando iOS'
});
const larguraDaTela = Dimensions.get("screen").width;

//Componentes
const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./res/img/alura.jpg')} style={styles.imagemStyle} />
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
    backgroundColor: '#F5FCFF',
  },
  titulo: {
    fontSize: 20,
  },
  subtitulo: {
    color: '#666666',
  },
  imagemStyle: {
    height: larguraDaTela, //Altura em pixels
    width: larguraDaTela,  //Largura em pixels
  }
});

export default App;
