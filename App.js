import { React } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.bloco}>
        <Text style={styles.titulo}>Previsão do tempo</Text>
      </View>

      <View style={styles.blocoGeral}>
        <Text style={styles.label}>Digite sua cidade</Text>

        <TextInput
          placeholder='sua cidade ...'
          style={styles.input}
        />
      </View>

      <View style={styles.blocoGeral}>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Buscar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bloco: {
    alignItems:'center',
    marginBottom:20,
    marginTop:20
  },
  titulo: {
    fontSize:30
  },
  label: {
    fontSize:20,
    marginLeft:'10%'
  },
  input: {
    marginLeft:'10%',
    borderBottomWidth:2,
    marginRight:'10%',
    fontSize:20
  },
  botao: {
    marginLeft:'10%',
    marginRight:'10%',
    backgroundColor:'#000'
  },
  textoBotao: {
    color:'#FFF',
    fontSize:20,
    textAlign:'center'
  },
  blocoGeral: {
    marginTop: 20
  }
});