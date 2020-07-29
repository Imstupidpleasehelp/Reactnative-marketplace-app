import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Button } from 'react-native';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/doge.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/download.png')} />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginButton}><Text style={styles.big}>LOLOLOL</Text></View>
      <View style={styles.registerButton}><Text style={styles.big}>WEWOWOWOw</Text></View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65'
  },
  logo: {
    width: 100,
    height: 100
  },
  big: {
      fontSize: 48,
      justifyContent: 'center',
      color: 'white',
      alignItems: 'center'
  },
  logoContainer: {
    top: 70,
    position: 'absolute',
    alignItems: 'center'
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ecdc4'
  }
});