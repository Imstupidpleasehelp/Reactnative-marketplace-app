import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

function ListItem({title, subtitle, image}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.subContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}
export default ListItem;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subContainer: {
      color: colors.white,
      
    },
    title: {
        color: colors.white,

  },
  subtitle: {
    color: colors.white,
  }
});
