import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Cabecalho = ({nome, uriAvatar}) => (
  <View style={style.cabecalho}>
    <Image source={{uri: uriAvatar}} style={style.avatar}/>
    <Text>{nome}</Text>
  </View>
);

const style = StyleSheet.create({
  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    margin: 10,
    borderRadius: 30,
  },
});

export default Cabecalho;