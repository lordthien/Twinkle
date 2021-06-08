import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const star1 = (
  <View style={styles.container}>
    <AntDesign name="staro" size={24} color="black" />;
  </View>
);

const star2 = (
  <View style={styles.container}>
    <AntDesign name="staro" size={24} color="black" />;
    <AntDesign name="staro" size={24} color="black" />;
  </View>
);
const star3 = (
  <View style={styles.container}>
    <AntDesign name="staro" size={24} color="black" />;
    <AntDesign name="staro" size={24} color="black" />;
    <AntDesign name="staro" size={24} color="black" />;
  </View>
);
const star4 = (
  <View style={styles.container}>
    <AntDesign name="staro" size={24} color="black" />;
    <AntDesign name="staro" size={24} color="black" />;
    <AntDesign name="staro" size={24} color="black" />;
    <AntDesign name="staro" size={24} color="black" />;
  </View>
);
const star5 = (
  <View style={styles.container}>
    <AntDesign name="staro" size={24} color="black" />;
    <AntDesign name="staro" size={24} color="black" />;
    <AntDesign name="staro" size={24} color="black" />;
    <AntDesign name="staro" size={24} color="black" />;
    <AntDesign name="staro" size={24} color="black" />;
  </View>
);

const star = [
  {
    id: 1,
    star: star1,
  },
  {
    id: 2,
    star: star2,
  },
  {
    id: 3,
    star: star3,
  },
  {
    id: 4,
    star: star4,
  },
  {
    id: 5,
    star: star5,
  },
];

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
export default star;
