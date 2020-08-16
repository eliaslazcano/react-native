import React, { Fragment } from 'react';
import Cabecalho from './Cabecalho';
import Imagem from './Imagem';
import Comentarios from './Comentarios';

const Post = ({nome, uriAvatar, uriFoto, descricao, qtdLikes, comentarios = []}) => (
  <Fragment>
    <Cabecalho nome={nome} uriFoto={uriAvatar}/>
    <Imagem uriFoto={uriFoto} descricao={descricao} qtdLikes={qtdLikes}/>
    <Comentarios comentarios={comentarios}/>
  </Fragment>
);

export default Post;