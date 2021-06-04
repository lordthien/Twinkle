import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TextHeaderInfo({title}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 12,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
