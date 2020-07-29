import React from 'react';
import  {View, Image, StyleSheet} from 'react-native'
import colors from '../config/colors'
import AppButton from '../components/appbutton';
function ViewImageScreen(props) {
    return (
        <View style={styles.Container}>
            <View style={styles.closeButton}></View>
            <View style={styles.closeButton}></View>
<Image resizeMode='contain' style={styles.Image} source={require('../assets/doge.jpg')} />
<AppButton />
</View>
    )
}
export default ViewImageScreen
const styles = StyleSheet.create({
    Container: {
backgroundColor: colors.primary,
flex: 1,
paddingTop: 50
    },
    closeButton: {
 height: 50,
 width: 50,
 backgroundColor: colors.secondary,
 position: 'absolute',
 top: 35,
 left: 40,
    },
    Image: {
        width: '100%',
        height: '100%'

    }
})