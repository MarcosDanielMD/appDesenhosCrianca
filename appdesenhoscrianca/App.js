import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Nunito_400Regular,
  Bangers_400Regular,
  Ubuntu_400Regular,
} from '@expo-google-fonts/dev';

export default function App() {
  let [fontsloaded] = useFonts({
    Nunito_400Regular,
    Bangers_400Regular,
    Ubuntu_400Regular,
  });

  if (!fontsloaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Animações que eu assistia quando criança</Text>
        <FlatList
          data={arrayimg}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <View style={styles.tituloimg}>
                <Image style={styles.img} source={item.capa} />
              </View>
              <Text style={styles.subtitulo}>
                Desenho:
                <Text style={styles.palavra}>{item.desenho} </Text>
              </Text>
              <Text style={styles.subtitulo}>
                Ano de Lançamento:
                <Text style={styles.palavra1}> {item.ano} {'\n'} </Text>  
              </Text>

              
            </View>
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
    alignItem:'center',
  },

  titulo: {
    fontSize: 30,
    color: '#4e3fc4',
    fontFamily: 'Bangers_400Regular',
    textAlign: 'center',
    margin: 10,
    fontWeight: 'normal',
  },

  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: ' Ubuntu_400Regular',
    color: '#4e3fc4'
  },

  img: {
    margin: 25,
    borderRadius: 30,
    width: 300,
    height: 300,
    resizeMode: 'Center',
  },

  tituloimg: {
    flex: 1,
    justifyContent: 'center',
    alignItem: 'center',
  },
  palavra: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: ' Nunito_400Regular',
    color:'#000000',
    
  },

  palavra1: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: ' Nunito_400Regular',
    color: '#000000',
  },
});

const arrayimg = [
  {
    desenho: ' Ben 10',
    ano: '2005',
    capa: require('./img/ben10.jpeg'),
  },

  {
    desenho: ' O Incrível mundo de Gunball',
    ano: '2011',
    capa: require('./img/gunball.jpeg'),
  },

  {
    desenho: ' Super Onze',
    ano: '2014',
    capa: require('./img/inazuma.jpeg'),
  },

  {
    desenho: ' Irmão do Jorel',
    ano: '2014',
    capa: require('./img/irmado_do_jorel.jpeg'),
  },

  {
    desenho: ' Super Choque',
    ano: ' 2000',
    capa: require('./img/superchoque.jpeg'),
  },
  {
  desenho: ' Naruto',
  ano:' 2001',
  capa: require('./img/naruto.png'),
  }
];
