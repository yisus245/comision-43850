import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Global/Colors";
import categories from "../Data/categories.json";
import CategoryItem from "../Components/CategoryItem";

const Home = ({ setCategorySelected }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Catalogo de Articulos</Text>
      <FlatList
        data={categories}
        keyExtractor={(category) => category}
        renderItem={({ item }) => CategoryItem({ item, setCategorySelected })}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: "90%",
    backgroundColor: colors.lightPink,
    alignItems: "center",
  },
  Text: {
    fontSize: 25,
    fontFamily: "Josefin",
  },
});
