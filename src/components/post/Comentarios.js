import React, { Fragment, useState } from 'react';
import { FlatList, Text, TextInput, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Comentarios = ({comentarios}) => {
  const [postComentarios, setComentarios] = useState(comentarios);
  let inputComment;
  let inputCommentText = '';
  const sendNewComment = () => {
    const novoComentario = {
      date: Date.now(),
      text: inputCommentText,
      userName: 'Elias Neto',
    };
    setComentarios([...postComentarios, novoComentario]);
    inputComment.clear();
  };

  return (
    <Fragment>
      <FlatList
        data={postComentarios}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <View style={{flexDirection: 'row'}}>
          <Text>{item.userName}: </Text>
          <Text>{item.text}</Text>
        </View>}
      />
      <View style={styles.newCommentContainer}>
        <TextInput
          ref={el => inputComment = el}
          placeholder={'Deixe seu comentário'}
          style={styles.inputComment}
          onChangeText={(texto) => inputCommentText = texto}
        />
        <TouchableOpacity onPress={sendNewComment}>
          <Image
            source={require('../../../res/img/send.png')}
            style={styles.imgSend}
          />
        </TouchableOpacity>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  newCommentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputComment: {
    flex: 1
  },
  imgSend: {
    width: 30,
    height: 30,
  }
});

export default Comentarios;