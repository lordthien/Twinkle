import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    width: 286,
    height: 90,
  },
});

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logoContainer}
          source={require("../../assets/twinkle.jpg")}
        />
      </View>
    );
  }
}
