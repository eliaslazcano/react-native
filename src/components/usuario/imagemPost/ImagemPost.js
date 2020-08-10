import React, { Fragment, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import style from './style';

const ImagemPost = (props) => {
  const [curtiu, setCurtiu] = useState(false); //Variável reativa (state): "curtiu", e seu setter: "setCurtiu".
  const curtirFoto = () => setCurtiu(!curtiu);
  const pegarImgLike = (curtiu) => curtiu ? require('../../../../res/img/s2-checked.png') : require('../../../../res/img/s2.png');

  return (
    <Fragment>
      <Image
        source={ {uri: props.urlFoto} }
        style={style.imagemStyle}
      />
      <Text style={style.descricao}>{props.descricao}</Text>
      <View style={style.likeView}>
        {/* TouchableOpacity torna a região "clicável", a animação do clique é alteração da opacidade. */}
        <TouchableOpacity onPress={curtirFoto}> 
          <Image
            source={pegarImgLike(curtiu)}
            style={style.likeBtn}
          />
        </TouchableOpacity>
        <Text>{curtiu ? props.qtdLikes + 1 : props.qtdLikes}</Text>
      </View>
    </Fragment>
  );
};

export default ImagemPost;