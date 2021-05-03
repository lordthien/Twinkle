import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

function Block({ icon, text }) {
  return (
    <TouchableOpacity style={styles.block}>
      <View style={styles.blockContainer}>{icon}</View>
      <View style={styles.textBlock}>
        <Text style={styles.textBl}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  block: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    marginLeft: 12,
  },

  blockContainer: {
    height: 80,
    width: 80,
    borderRadius: 20,
    backgroundColor: "#ecf0f1",
    alignItems: "center",
    justifyContent: "center",
  },

  blockContainerSelected: {
    height: 80,
    width: 80,
    borderRadius: 20,
    backgroundColor: "#d35400",
    alignItems: "center",
    justifyContent: "center",
  },

  textBl: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});
export default Block;
