import React, { Fragment } from 'react';
import { Image } from 'react-native';
import { Cabecalho } from './cabecalho';
import style from './style';

const Usuario = (props) => {
  return (
    <Fragment>
      <Cabecalho nome={props.nome}/>
      <Image
        source={require('./../../../res/img/alura.jpg')}
        style={style.imagemStyle}
      />
    </Fragment>
  );
};

export default Usuario;