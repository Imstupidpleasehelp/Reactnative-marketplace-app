import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Button,
  Card,
} from "react-native";
import colors from '../config/colors'
function CardCom({title, subtitle, image}) {
  return (
    <View style={styles.card}>
     <Image style={styles.cardImage} source={(image)} />
     <Text stlye={styles.carDesc}>{title}</Text>
     <Text stlye={styles.carSubDesc}>{subtitle}</Text> 
    </View>
  );
}
export default CardCom;

const styles = StyleSheet.create({
  card: {
    width: '80%',
    height: '25%',
    borderRadius: 25,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {

  }
})
