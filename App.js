import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Previsão do Tempo</Text>
      </View>

      <View style={styles.bloco}>
        <Text style={styles.subtitle}>Informe sua cidade:</Text>
        <TextInput 
          placeholder='Sua cidade...'
          style={styles.input}
        />
        <TouchableOpacity style={styles.button}>
          <Text>Buscar</Text>
        </TouchableOpacity>
      </View>

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
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    width: Dimensions.get('window').width,
    height: '10%',
    paddingTop: '3%',

    backgroundColor: 'blue',
  },
  title: {
    fontSize: 20,
    color: '#fff',
  },
  bloco: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',

    width: '80%',
    height: '50%',
    borderRadius: 20,

    backgroundColor: '#fff',
  }
});
