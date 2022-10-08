import { StyleSheet, Text, View, Image, requireNativeComponent, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


export default function Feed() {

    const feed = [
        {
            id: 1,
            nome: 'PiuPiu',
            imgPerfil: require('../assets/Imagens/piupiu.jpg'),
            img: require('../assets/Imagens/looney.jpg'),
            aspectRatio: 1.777,
        },
        {
            id: 2,
            nome: 'Pernalonga',
            imgPerfil: require('../assets/Imagens/perna.webp'),
            img: require('../assets/Imagens/OIP.jpg'),
            aspectRatio: 1.777,
        },    
        {
            id: 1,
            nome: 'Taz',
            imgPerfil: require('../assets/Imagens/Taz.webp'),
            img: require('../assets/Imagens/looney1.jpg'),
            aspectRatio: 1.777,
        },

    ];

    function renderItem({item}){
        return <View style={styles.post}>
        <View style={styles.postheader}>
          <View style={styles.postheaderesquerda}>
           <Image style={styles.postheaderimg} source={item.imgPerfil}/>
           <Text>{item.nome}</Text>
          </View>
          <FontAwesome5 name ="ellipsis-h" size={16} color="black"/>
        </View>
        <Image style={styles.postimg} aspectRatio={item.aspectRatio} source={item.img} />
        <View style={styles.footer}>
          <FontAwesome5 style={styles.footericon} name ="heart" size={36} color="black"/>
          <FontAwesome5 style={styles.footericon} name ="comment" size={36} color="black"/>
          <FontAwesome5 style={styles.footericon} name ="share" size={36} color="black"/>
        </View> 
      </View> 


    }
    return(
        <View style={styles.feed}>
            <FlatList
            data={feed}
            renderItem={renderItem}
            keyExtractor={item=> item.id}
            showsVerticalScrollIndicator={false}
            
            
            />
        </View>

    );
}


const styles = StyleSheet.create({
feed: {
    flex: 1,
    backgroundColor: '#fff',
  },
  post: {
    backgroundColor: '#fff',
  },
  postheader: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
  },
  postheaderimg: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 5,
  },
  postheaderesquerda: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postimg: {
    width: '100%',
    height: undefined,
  },
  footer: {
    height: 60,
    backgroundColor:'#fff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  footericon: {
    margin: 5,
  }
});
