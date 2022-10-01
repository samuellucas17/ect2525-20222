import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, requireNativeComponent } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style= {styles.header}>
          <Image style={styles.transferir} source={require('./assets/Imagens/transferir.jpg')}/>
          <FontAwesome5 name ="users" size={24} color="black"/>
          <FontAwesome5 name ="video" size={24} color="black"/>
          <FontAwesome5 name ="paper-plane" size={24} color="black"/>
      </View>
      <View style={styles.stories}>
      <View style={styles.story}>
        <Image style= {styles.imgstory} source={require('./assets/Imagens/perna.webp')}/>
        <Text>Perna</Text>
        </View>
        <View style={styles.story}>
        <Image style= {styles.imgstory} source={require('./assets/Imagens/patolino.webp')}/>
        <Text>Patolino</Text>
        </View>
        <View style={styles.story}>
        <Image style= {styles.imgstory} source={require('./assets/Imagens/Taz.webp')}/>
        <Text>Taz</Text>
        </View>
        <View style={styles.story}>
        <Image style= {styles.imgstory} source={require('./assets/Imagens/piupiu.jpg')}/>
        <Text>Piupiu</Text>
        </View>
      </View>
      <View style={styles.feed}>
        <View style={styles.post}>
          <View style={styles.postheader}>
            <View style={styles.postheaderesquerda}>
             <Image style={styles.postheaderimg} source={require('./assets/Imagens/piupiu.jpg')}/>
             <Text>Piu Piu</Text>
            </View>
            <FontAwesome5 name ="ellipsis-h" size={16} color="black"/>
          </View>
          <Image style={styles.postimg} aspectRatio={1.777} source={require('./assets/Imagens/looney.jpg')} />
          <View style={styles.footer}>
            <FontAwesome5 style={styles.footericon} name ="heart" size={36} color="black"/>
            <FontAwesome5 style={styles.footericon} name ="comment" size={36} color="black"/>
            <FontAwesome5 style={styles.footericon} name ="share" size={36} color="black"/>
          </View> 
        </View> 
        <View style={styles.post}>
          <View style={styles.postheader}>
            <View style={styles.postheaderesquerda}>
             <Image style={styles.postheaderimg} source={require('./assets/Imagens/perna.webp')}/>
             <Text>Pernalonga</Text>
            </View>
            <FontAwesome5 name ="ellipsis-h" size={16} color="black"/>
          </View>
          <Image style={styles.postimg} aspectRatio={1.777} source={require('./assets/Imagens/OIP.jpg')} />
          <View style={styles.footer}>
            <FontAwesome5 style={styles.footericon} name ="heart" size={36} color="black"/>
            <FontAwesome5 style={styles.footericon} name ="comment" size={36} color="black"/>
            <FontAwesome5 style={styles.footericon} name ="share" size={36} color="black"/>
          </View> 
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f00',
    marginTop: Constants.statusBarHeight,
  },
  imagem: {
    width: 300,
    height: 350,
  },
  header: {
    flexDirection: 'row',
    padding: 3,
    height: 37,
    backgroundColor: '#0f0',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  transferir: {
    height:27, 
    width:120, 
  },
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
