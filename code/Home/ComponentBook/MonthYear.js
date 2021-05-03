import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function MonthYear() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Ionicons name="chevron-back" size={18} color="black" />
      </TouchableOpacity>
      <Text style={styles.text}>June 2021</Text>
      <TouchableOpacity>
        <Ionicons name="chevron-forward" size={18} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginBottom: 8,
    flexDirection: "row",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 4,
    marginLeft: 4,
  },
});
