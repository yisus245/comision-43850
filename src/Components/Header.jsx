import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Global/Colors";

const Header = () => {
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.text}>Tienda de Ropa</Text>
      <Text style={styles.text}>✰Fashion shop✰</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  containerHeader: {
    height: "10%",
    backgroundColor: "#DEE5E6",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    fontFamily: "Josefin",
  },
});
