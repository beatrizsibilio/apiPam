import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Tempo(props) {
    return (
        <>
            <Text style={styles.textoTitulo}>Tempo agora:</Text>
            <Text style={styles.texto}>Data da consulta: {props.data.date}</Text>
            <Text style={styles.texto}>Hora da consulta: {props.data.time}</Text>
            <Text style={styles.texto}>Descrição: {props.data.description}</Text>

            <Text style={styles.textoTitulo}>Previsão para o resto do dia:</Text>
            <Text style={styles.texto}>Min: {props.data2.min}</Text>
            <Text style={styles.texto}>Max: {props.data2.max}</Text>
            <Text style={styles.texto}>Descrição: {props.data2.description}</Text>

            <Text style={styles.textoTitulo}>Tempo amanhã:</Text>
            <Text style={styles.texto}>Min: {props.data3.min}</Text>
            <Text style={styles.texto}>Max: {props.data3.max}</Text>
            <Text style={styles.texto}>Descrição: {props.data3.description}</Text>
        </>
    );
}

const styles = StyleSheet.create({
    texto:{
        fontSize:20,
        marginLeft:'10%',
        marginTop:2
    },

    textoTitulo:{
        fontSize:22,
        marginLeft:'10%',
        marginTop:15,
        fontWeight: 'bold',
    }
});