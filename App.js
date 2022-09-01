import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Tempo from './components/Tempo';
import Api from './components/Api';

export default function App() {
  const [cidade, setCidade] = useState("itu");
  const [dadosGeral, setDadosGeral] = useState("");
  const [dados, setDados] = useState("");
  const [dados2, setDados2] = useState("");

  async function buscaCep(){
    const response = await Api.get(`weather?array_limit=2&fields=only_results,temp,city_name,forecast,max,min,date,description,time&key=751a5f11&city_name=${cidade},SP`);
    setDadosGeral(response.data);
    setDados(response.data.forecast[0]);
    setDados2(response.data.forecast[1]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.bloco}>
        <Text style={styles.titulo}>Previsão do tempo</Text>
      </View>

      <View style={styles.blocoGeral}>
        <Text style={styles.label}>Digite sua cidade: </Text>

        <TextInput
          placeholder='sua cidade ...'
          style={styles.input}
          onChangeText={(value)=>setCidade(value)}
        />
      </View>

      <View style={styles.blocoGeral}>
        <TouchableOpacity style={styles.botao} onPress={buscaCep}>
          <Text style={styles.textoBotao}>Buscar</Text>
        </TouchableOpacity>
      </View>

      <Tempo data={dadosGeral} data2={dados} data3={dados2}/>
     
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