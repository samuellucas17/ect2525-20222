import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, requireNativeComponent } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome5 } from '@expo/vector-icons';


export default function Header(){
    return (
        <View style= {styles.header}>
        <Image style={styles.transferir} source={require('../assets/Imagens/transferir.jpg')}/>
        <FontAwesome5 name ="users" size={24} color="black"/>
        <FontAwesome5 name ="video" size={24} color="black"/>
        <FontAwesome5 name ="paper-plane" size={24} color="black"/>
    </View>
    );
}
const styles = StyleSheet.create({
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
});