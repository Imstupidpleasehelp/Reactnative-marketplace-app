import React from 'react';
import  {View, Image, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native'
import colors from '../config/colors'
import AppButton from '../components/appbutton';
import {MaterialCommunityIcons} from '@expo/vector-icons';


const ViewImageScreen = () =>  {
    return (
        <View style={styles.Container}>
           
            <View style={styles.closeButton}>
                <MaterialCommunityIcons name="arrow-left" color="black" size={50} />
            </View>
            <View style={styles.orderButton}>
                <MaterialCommunityIcons name="food-fork-drink" color="white" size={50} /><Text style={styles.order}>Order</Text>
            </View>
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
    topbar: {
width: '100%',
backgroundColor: colors.primary,
top: 0
    },
    closeButton: {
 
 position: 'absolute',
 top: 35,
 left: 40,
    },
    order: {
color: 'white',
fontSize: 18,
alignItems: 'center',
marginTop: -12
    },
    orderButton: {
        
        
        position: 'absolute',
        top: 35,
        right: 40,
    },
    Image: {
       width: 400,
       height: 550,
       marginTop: 55,
marginBottom: 55
    }
})