import React, { Fragment, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const Imagem = ({uriFoto, descricao, qtdLikes}) => {
  const [curtiu, setCurtiu] = useState(false);
  const [likes, setLikes] = useState(qtdLikes);
  const onLike = () => {
    if (curtiu) setLikes(likes -1);
    else setLikes(likes + 1);
    setCurtiu(!curtiu);
  };
  const getLikeButtonImage= (curtido) => curtido ? require('../../../res/img/s2-checked.png') : require('../../../res/img/s2.png');

  return (
    <Fragment>
      <Image source={{uri: uriFoto}} style={styles.foto}/>
      <Text style={styles.descricao}>{descricao}</Text>
      <View style={styles.likeView}>
        <TouchableOpacity onPress={onLike}>
          <Image source={getLikeButtonImage(curtiu)} style={styles.likeButton}/>
        </TouchableOpacity>
        <Text>{likes}</Text>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  foto: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').width,
  },
  descricao: {
    margin: 5,
  },
  likeView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  likeButton: {
    height: 32,
    width: 32,
    margin: 5,
  },
});

export default Imagem;