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
    height:37, 
    width:260, 
  },
  stories: {
    height:90,
    backgroundColor: '#00f',
    flexDirection: 'row',
  },
  story: {
    height:90,
    width:90,
    backgroundColor:'#f0f',
    alignItems: 'center',
    borderRadius:48,
    
  },
  imgstory: {
    height:70,
    width:70,
    borderRadius: 37,
    flexDirection: 'row',
  }
});
