import React from "react";
import { Text, StyleSheet, View } from 'react-native';

export default function Tempo(props){
    return (
        <>
            <View style={styles.bloco}>
                <Text style={styles.texto}>Cidade: {props.data.city_name}</Text>
                <Text style={styles.texto}>Temperatura: {props.data.temp}</Text>
                <Text style={styles.texto}>Min: {props.data.min}</Text>
                <Text style={styles.texto}>Max: {props.data.max}</Text>
                <Text style={styles.texto}>Descrição: {props.data.description}</Text>
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
        height: '50%',
        borderRadius: 50,
    
        backgroundColor: '#fff',
    },
    texto: {
        fontSize: 20,
    }
})