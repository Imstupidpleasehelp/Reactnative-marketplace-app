import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Button,
} from "react-native";
import AppButton from "../components/appbutton";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const WelcomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/fries.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/munch.png")} />
        <Text style={styles.big}>Hungry?</Text>
      </View>
      <View style={styles.buttonbox}>
        <AppButton title={"Browse food"} />
        <AppButton title={"Search"} color="secondary" />
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('listings')}
      />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
  },
buttonbox: {
  padding: 20,
  width: '100%'
},
  logo: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderRadius: 250,
  },
  big: {
    fontSize: 48,
    justifyContent: "center",
    color: "white",
    alignItems: "center",
  },
  logoContainer: {
    top: 70,
    position: "absolute",
    alignItems: "center",
  }
});
