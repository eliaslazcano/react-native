import React from 'react';
import { Image } from 'react-native';
import style from './style';

const ImagemPost = () => {
  return (
    <Image
      source={require('../../../../res/img/alura.jpg')}
      style={style.imagemStyle}
    />
  );
};

export default ImagemPost;