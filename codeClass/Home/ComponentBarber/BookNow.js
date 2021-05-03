import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

export default class BookNow extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <LinearGradient colors={['#ecf0f1', '#FF6C44', '#FF6C44']} style={{borderRadius: 16,}}>
            <View style={styles.bookContainer}>
              <Text>Book Now</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
