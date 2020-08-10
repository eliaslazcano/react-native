import React, { Fragment } from 'react';
import { Cabecalho } from './cabecalho';
import { ImagemPost } from './imagemPost';

const Usuario = (props) => {
  return (
    <Fragment>
      <Cabecalho nome={props.nome}/>
      <ImagemPost/>
    </Fragment>
  );
};

export default Usuario;