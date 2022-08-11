import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Header from './components/Header';
import Busca from './components/Busca';

export default function App() {
  return (
    <View style={styles.container}>

      <Header />

      <Busca />

      <View style={styles.footer}>
        <Text>App de Clima</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  
});
