import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

function TextHeader({ text, textViewAll }) {
  return (
    <View style={styles.headerText}>
      <Text style={styles.textTopservice}>{text}</Text>
      <TouchableOpacity>
        <Text style={styles.textViewall}>{textViewAll}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textTopservice: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 12,
  },
  textViewall: {
    fontSize: 14,
    fontWeight: "600",
    marginRight: 12,
    color: "#e67e22",
  },
});
export default TextHeader;
