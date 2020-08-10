import { StyleSheet, Dimensions } from 'react-native';

const style = StyleSheet.create({
  imagemStyle: {
    height: Dimensions.get('screen').width,
    width: Dimensions.get('screen').width,
  },
  descricao: {
    margin: 5,
  },
  likeView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  likeBtn: {
    height: 32,
    width: 32,
    margin: 5,
  }
});

export default style;
