import React, {useStates} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Tempo from './components/Tempo';
import api from './components/Api';

export default function App() {
  const [dados, setDados] = useState();
  const [cidade, setCidade] = useState();

  async function buscaCep(){
    const resposta = await api.get('weather?array_limit=1&fields=only_results,temp,city_name,description,forecast,max,min,date&key=751a5f11&city_name=Peruibe,SP');
    setDados(resposta.data.forecast[0]);
    console.warn(dados);
  }

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
          onKeyPress={buscaCep}
        />
      </View>

      <View style={styles.blocoGeral}>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Buscar</Text>
        </TouchableOpacity>
      </View>
      <Tempo data={dados}/>
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
    backgroundColor:'purple'
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