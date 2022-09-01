import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import Header from './components/Header';
import Busca from './components/Busca';
import Footer from './components/Footer';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>

        <Header />

        <Busca />

        <Footer />
      </View>
    </ScrollView>
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
    minHeight: Dimensions.get('window').height,
  },
  
});
