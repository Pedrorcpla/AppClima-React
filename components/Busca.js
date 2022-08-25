import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Tempo from './Tempo';
import Api from './Api';

export default function(){
    const [clima, setClima] = useState(0);
    const [clima2, setClima2] = useState(0);
    const [inputCity, setInputCity] = useState(0);
        
    async function carregaCity(){
        const response = await Api.get('weather?array_limit=1&fields=only_results,temp,city_name,forecast,max,min,description,date&key=1ee4375a&city_name='+inputCity);
        
        setClima(response.data.forecast[0]);
        setClima2(response.data);

    };

    return (
        <>
            <View style={styles.bloco}>
                <TextInput 
                    placeholder='Procurar cidade...'
                    style={styles.input}
                    onChangeText={(data)=>setInputCity(data)}
                />
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={carregaCity}
                >
                    <Icon 
                        name='magnifying-glass' 
                        color='#fff' 
                        size={25} 
                    />
                </TouchableOpacity>
            </View>

            <Tempo data={clima} data2={clima2}/>
        </>
    );
}

const styles = StyleSheet.create({
    bloco: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    
        width: '90%',
        height: '15%',
        borderRadius: 50,
    
        backgroundColor: '#fff',
    },
    input: {
        width: '75%',
        height: '50%',

        borderColor: 'blue',
        borderWidth: 2.5,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,

        paddingLeft: '3%',
    },
    button: {
        width: '15%',
        height: '50%',

        borderColor: 'blue',
        borderWidth: 2.5,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,

        backgroundColor: 'blue',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})