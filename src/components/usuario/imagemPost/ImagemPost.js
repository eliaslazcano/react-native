import React, { Fragment } from 'react';
import { Image, Text } from 'react-native';
import style from './style';

const ImagemPost = (props) => {
  return (
    <Fragment>
      <Image
        source={ {uri: props.urlFoto} }
        style={style.imagemStyle}
      />
      <Text style={style.descricao}>{props.descricao}</Text>
      <Image
        source={require('../../../../res/img/s2.png')}
        style={style.likeBtn}
      />
    </Fragment>
  );
};

export default ImagemPost;