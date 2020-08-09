import React from 'react';
import { View, Image, Text } from 'react-native';
import style from './style';

const Cabecalho = (props) => {
  return (
    <View style={style.cabecalho}>
      <Image
        source={require('./../../../../res/img/alura.jpg')}
        style={style.avatar}
      />
      <Text>{props.nome}</Text>
    </View>
  );
};

export default Cabecalho;