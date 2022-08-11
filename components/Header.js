import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function(){
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Previsão do Tempo</Text>
        </View>
    );
}

const styles = StyleSheet.create({
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
});