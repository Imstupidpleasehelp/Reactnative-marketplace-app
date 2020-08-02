import React from 'react';
import  {View, Image, StyleSheet} from 'react-native'
import colors from '../config/colors'
import AppButton from '../components/appbutton';
import {MaterialCommunityIcons} from '@expo/vector-icons';


const ViewImageScreen = () =>  {
    return (
        <View style={styles.Container}>
            <View style={styles.closeButton}></View>
            <View style={styles.orderButton}></View>
<Image resizeMode='contain' style={styles.Image} source={require('../assets/doge.jpg')} />
<AppButton />
</View>
    )
}
export default ViewImageScreen
const styles = StyleSheet.create({
    Container: {
backgroundColor: colors.secondary,
flex: 1,
paddingTop: 50
    },
    closeButton: {
 height: 50,
 width: 50,
 backgroundColor: colors.primary,
 position: 'absolute',
 top: 35,
 left: 40,
    },
    orderButton: {
        height: 50,
        width: '100%',
        backgroundColor: colors.forth,
       position: 'absolute',
        bottom: 0,
        left: 40,  
        marginBottom: 15
    },
    Image: {
       width: 400,
       height: 600,
       marginTop: 45

    }
})