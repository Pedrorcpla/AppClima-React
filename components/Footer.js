import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function(){
    return (
        <View style={styles.footer}>
            <Text style={styles.textosterona}>App feito por Pedro Tavares</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        width: Dimensions.get('window').width,
        height: '5%',

        backgroundColor: 'black',
        
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textosterona: {
        color: 'white',
        fontSize: 15
    }
});