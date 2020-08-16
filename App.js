/* eslint-disable prettier/prettier */
/**
 * @format
 * @flow strict-local
 */

//Importações
import React, { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import Post from './src/components/post';
import loadPosts from './src/api/feed';

//Componentes
const App = () => {
  //Variaveis reativas
  const [posts, setPosts] = useState([]); //[var, setter()] = useState(valorInicial[]);
  
  //Evento executado quando o componente é construído.
  useEffect(() => {
    loadPosts(setPosts);
  }, []);

  //Template visual
  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={ ({item}) => {
          return (
            <Post
              nome={item.userName}
              uriAvatar={'https://i.pravatar.cc/300'}
              uriFoto={'https://picsum.photos/300'}
              descricao={item.description}
              qtdLikes={item.likes}
              comentarios={item.comentarios}
            />
          );
        }
        }
      />
    </View>
  );
};

export default App;
