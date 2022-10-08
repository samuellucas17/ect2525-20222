import React from 'react';
import { StyleSheet, Text, View, Image, requireNativeComponent } from 'react-native';
import { FlatList } from 'react-native';
export default function Stories() {
    const stories = [
        {
            id: 1,
            nome: 'Perna',
            src: require('../assets/Imagens/perna.webp'),
        },
        {
            id: 2,
            nome: 'Patolino',
            src: require('../assets/Imagens/patolino.webp'),
        },
        {
            id: 3,
            nome: 'Taz',
            src: require('../assets/Imagens/Taz.webp'),
        },
        {
            id: 4,
            nome: 'Piupiu',
            src: require('../assets/Imagens/piupiu.jpg'),
        },
        {
            id: 5,
            nome: 'Felicia',
            src: require('../assets/Imagens/felicia.jpg'),
        },
    ];
    function renderItem({ item }) {
    return  <View style={styles.story}>
            <Image style= {styles.imgstory} source={item.src} />
            <Text>{item.nome}</Text>
        </View>

    }
    
    return (
     <View style={styles.stories}>
        <FlatList
            data={stories}
            renderItem={renderItem}
            keyExtractor={item=> item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
      </View>
    );
}
const styles = StyleSheet.create({
stories: {
    height:90,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
story: {
    height:90,
    width:90,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius:48,
    
  },
imgstory: {
    height:70,
    width:70,
    borderRadius: 37,
    flexDirection: 'row',
  },
});