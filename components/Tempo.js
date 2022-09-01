import React from "react";
import { Text, StyleSheet, View } from 'react-native';

export default function Tempo(props){
    return (
        <>
            <View style={styles.bloco}>
                <Text style={styles.titulo}>Hoje</Text>
                <Text style={styles.texto}>Cidade: {props.data2.city_name}</Text>
                <Text style={styles.texto}>Temperatura: {props.data2.temp}°C</Text>
                <Text style={styles.texto}>Min: {props.data.min}°C</Text>
                <Text style={styles.texto}>Max: {props.data.max}°C</Text>
                <Text style={styles.texto}>Descrição: {props.data.description}</Text>
                <Text style={styles.texto}>Hora da consulta: {props.data2.time}</Text>
                <Text style={styles.texto}>Data da consulta: {props.data2.date}</Text>
            
                <Text style={styles.titulo}>Amanhã</Text>
                <Text style={styles.texto}>Min: {props.data3.min}°C</Text>
                <Text style={styles.texto}>Max: {props.data3.max}°C</Text>
                <Text style={styles.texto}>Descrição: {props.data3.description}</Text>
            </View>
        </>

    );
}

const styles = StyleSheet.create({
    bloco: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    
        width: '90%',
        height: '70%',
        borderRadius: 50,
    
        backgroundColor: '#fff',
    },
    titulo: {
        fontSize: 25,
        color: "blue",
    },
    texto: {
        fontSize: 20,
    }
})