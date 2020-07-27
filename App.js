import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  //shake the phone for dev menu
  console.log('It worked')
  return (
    <View style={styles.container}>
      <Text style={styles.whitetext}>Nwwwe

      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkslategrey',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  whitetext: {
color: 'white',
fontSize: 45
  }
});
