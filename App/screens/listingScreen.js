import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import CardCom from "../components/card";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

function ListingScreen(props) {
  return (
    <ScrollView>
      <View style={styles.listpage}>
        <CardCom
          title="aaa"
          subtitle="wee"
          price="10.99"
          image={require("../assets/hotdog.jpg")}
        />
        <ListItem
          title="Wendy's"
          subtitle="Fast food"
          image={require("../assets/doge.jpg")}
        />
        <CardCom
          title="aaa"
          subtitle="wee"
          price="10.99"
          image={require("../assets/fries.jpg")}
        />
        <ListItem
          title="Wendy's"
          subtitle="Fast food"
          image={require("../assets/doge.jpg")}
        />
      </View>
    </ScrollView>
  );
}
export default ListingScreen;
const styles = StyleSheet.create({
  listpage: {
    backgroundColor: colors.primary,
    flex: 1,
  },
});
