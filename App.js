import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, requireNativeComponent } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome5 } from '@expo/vector-icons';
import Header from './componentes/Header';
import Stories from './componentes/Stories';
import Feed from './componentes/Feed';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header/>
      <Stories/>
      <Feed/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f00',
    marginTop: Constants.statusBarHeight,
  }
});