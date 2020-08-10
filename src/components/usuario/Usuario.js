import React, { Fragment } from 'react';
import { Cabecalho } from './cabecalho';
import { ImagemPost } from './imagemPost';

const Usuario = (props) => {
  return (
    <Fragment>
      <Cabecalho nome={props.nome} urlFoto={props.avatar}/>
      <ImagemPost urlFoto={props.urlFoto} descricao={props.descricao}/>
    </Fragment>
  );
};

export default Usuario;