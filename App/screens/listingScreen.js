import React from 'react';
import  {View, Image, StyleSheet} from 'react-native'
import CardCom from '../components/card';
import ListItem from  '../components/ListItem'

function ListingScreen(props) {
    return (
        <View>
            <CardCom title='aaa' subtitle='wee' image={require('../assets/hotdog.jpg')} />
            <ListItem title="wee" subtitle="wee" image={require('../assets/doge.jpg')} />
        </View>
    )
}
export default ListingScreen
const styles = StyleSheet.create({
    
})