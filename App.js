import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert
} from "react-native";
//use safearea to make sure it's not covered
export default function App() {
  //shake the phone for dev menu
  const HandlePress = () => alert('AAAA');
  return (
    
    
    <SafeAreaView style={styles.container}><Text style={styles.title}>Meme dictionary</Text>
      {/*local image <Image styles={styles.image} source={require("./assets/download.png")} />*/}
      <Text style={styles.whitetext}>DOGE </Text>
      <View >
        <Image
          style={styles.image}
          source={{
            width: 200,
            height: 300,
            uri:
              "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi0.kym-cdn.com%2Fphotos%2Fimages%2Foriginal%2F000%2F640%2F866%2Fe59.png&f=1&nofb=1",
          }}
        />
        {/* alerts */}
        <Button title="click meh" onPress={() => Alert.alert('Do you', 'yes', [
          {text: 'yes'},
          {text: 'nah', onPress:HandlePress}
        ])}  />
      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gold",
    justifyContent: "center",
    alignItems: "center",
  
  },
  title: {
justifyContent: "space-around",
fontSize: 48,
paddingLeft: 5,
paddingRight: 5,
backgroundColor: 'orange',
  },
  whitetext: {
    color: "black",
    fontSize: 45,
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
  },
});
