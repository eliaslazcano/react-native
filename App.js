/* eslint-disable prettier/prettier */
/**
 * @format
 * @flow strict-local
 */

 //Importações
import React, { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { Usuario } from './src/components/usuario';
import { Post } from './src/components/post';
import loadFotos from './src/api/feed';

//Componentes
const App = () => {
  //Variaveis reativas
  const [fotos, setFotos] = useState([]); //[var, setter()] = useState(valorInicial[]);
  
  //Evento executado quando o componente é construído.
  useEffect(() => {
    loadFotos(setFotos);
  }, []);

  //Template visual
  return (
    <View>
      <FlatList
        data={fotos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={ ({item, index}) => {
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
