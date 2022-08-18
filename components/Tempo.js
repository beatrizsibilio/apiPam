import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Tempo() {
 return (
     <>
        <Text style={styles.texto}>Min: {props.data.min}</Text>
        <Text style={styles.texto}>Max: </Text>
        <Text style={styles.texto}>Descricao: </Text>
     </>
  );
}

const styles = StyleSheet.create({
    texto:{
        fontSize:20,
        marginLeft:'10%',
        marginTop:10
    }
});