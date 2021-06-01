import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

function BookNow({ onPress, title }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          colors={["#f39c12", "#e67e22", "#d35400"]}
          style={{ borderRadius: 16 }}
        >
          <View style={styles.bookContainer}>
            <Text style={{ fontWeight: "bold", color: "#fff" }}>{title}</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  bookContainer: {
    height: 50,
    width: 360,
    backgroundColor: "#FF6C4450",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
});
export default BookNow;
