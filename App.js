/* eslint-disable prettier/prettier */
/**
 * @format
 * @flow strict-local
 */

 //Importações
import React from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import { Usuario } from './src/components/usuario';

//Valores
const larguraDaTela = Dimensions.get('screen').width;
const usuarios = [
  {usuario: 'Elias Neto'},
  {usuario: 'Karoliny Pauluk'},
  {usuario: 'Laura Pauluk'},
  {usuario: 'Erilda Viana'},
];

//Componentes
const App = () => {
  return (
    <View>
      <FlatList
        data={usuarios}
        keyExtractor={(item, index) => index.toString()}
        renderItem={ ({item, index}) => <Usuario nome={item.usuario}/> }
      />
    </View>
  );
};

export default App;
