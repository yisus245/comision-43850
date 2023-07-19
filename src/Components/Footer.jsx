import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../Global/Colors";
import { AntDesign } from "@expo/vector-icons";

const Footer = ({ route, navigation }) => {
  <View style={styles.containerHeader}>
    <Text style={styles.text}>"HOLA"</Text>
    {route.name !== "Home" ? (
      <Pressable style={styles.pressable} onPress={() => navigation.goBack()}>
        <AntDesign name="back" size={24} color="white" />
      </Pressable>
    ) : null}
  </View>;
};

export default Footer;
const styles = StyleSheet.create({
  containerHeader: {
    backgroundColor: "#F1EDEA",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    position: "relative",
  },
  text: {
    fontSize: 25,
    fontFamily: "Josefin",
  },
  pressable: {
    position: "absolute",
    right: 30,
    top: "50%",
  },
});
