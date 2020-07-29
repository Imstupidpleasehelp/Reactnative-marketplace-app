import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
} from "react-native";
/*
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";  use this to support orientations */
import WelcomeScreen from "./App/screens/welcomeScreen";
import ViewImageScreen from "./App/screens/viewimage";
//use safearea to make sure it's not covered

export default function App() {
  //shake the phone for dev menu
  /* const {
    landscape,
  } = useDeviceOrientation(); /* change with orientation  <Text style={{color: landscape ? 'green' : 'black',}}>Meme dictionary</Text> */
  return (
    <SafeAreaView style={styles.container}>
      <ViewImageScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gold",
  },
  title: {
    justifyContent: "space-around",
    fontSize: 48,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: "orange",
  },
  whitetext: {
    color: "black",
    fontSize: 45,
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "red",
    height: "50%",
    width: "60%",
  },
});

{
  /*local image <Image styles={styles.image} source={require("./assets/download.png")} />*/
}
{
  /* alerts 
  <Button title="click meh" onPress={() => Alert.alert('Do you', 'yes', [
    {text: 'yes'},
    {text: 'nah', onPress:HandlePress}
  ])}  />*/
}

{
  /* web inmages <Image
  style={styles.image}
  source={{
    width: 200,
    height: 300,
    uri:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi0.kym-cdn.com%2Fphotos%2Fimages%2Foriginal%2F000%2F640%2F866%2Fe59.png&f=1&nofb=1",
  }}
/>
*/
}
