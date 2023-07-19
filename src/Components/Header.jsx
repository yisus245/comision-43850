import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Global/Colors";
import { AntDesign } from "@expo/vector-icons";

const Header = ({ route, navigation }) => {
  let title;
  if (route.name === "Home") title = "Home";
  if (route.name === "ItemListCategory") title = route.params.category;
  if (route.name === "Detail") title = route.params.title;
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.text}>{title}</Text>
      {route.name !== "Home" ? (
        <Pressable style={styles.pressable} onPress={() => navigation.goBack()}>
          <AntDesign name="back" size={24} color="white" />
        </Pressable>
      ) : null}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  containerHeader: {
    backgroundColor: "#393D40",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    position: "relative",
  },
  text: {
    color: "#fff",
    fontSize: 25,
    fontFamily: "Josefin",
  },
  pressable: {
    position: "absolute",
    right: 30,
    top: "50%",
  },
});
