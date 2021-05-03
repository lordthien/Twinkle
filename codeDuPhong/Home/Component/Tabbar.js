import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

function Tabbar({}) {
  return (
    <View style={styles.containerTabbar}>
      <TouchableOpacity style={styles.homeContainer}>
        <Image
          style={styles.iconHeader}
          source={require("../../../assets/icon/iconBaber.jpg")}
        />
        <Text style={styles.textHome}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.aboutButton}>
        <Ionicons name="search-outline" size={18} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.aboutButton}>
        <Ionicons name="cart-outline" size={18} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.aboutButton}>
        <MaterialCommunityIcons name="heart-outline" size={18} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.aboutButton}>
        <Ionicons name="notifications-outline" size={18} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerTabbar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#c8d6e5",
    width: 375,
    borderRadius: 24,
  },

  iconHeader: {
    height: 20,
    width: 20,
    marginRight: 8,
  },

  homeContainer: {
    height: 40,
    width: 89,
    backgroundColor: "#FF6C44",
    flexDirection: "row",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 24,
  },
  textHome: {
    fontSize: 12,
    fontWeight: "700",
    color: "white",
  },

  aboutButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 43,
  },
});
export default Tabbar;
