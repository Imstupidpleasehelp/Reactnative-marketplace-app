import React from 'react';
import colors from '../config/colors'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'

function AppButton({title, onPress}) {
    return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
         <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default AppButton;
const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: 'center',
        width: '100%'
        
    },
    text: {
        color: 'white',
        fontSize: 32
    }
})