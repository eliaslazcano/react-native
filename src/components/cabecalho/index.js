import React from 'react';
import {Text} from 'react-native';

const cabecalho = (props) => {
  return (
    <Text>Olá {props.usuario}, sou um componente!</Text>
  );
};

export default cabecalho;