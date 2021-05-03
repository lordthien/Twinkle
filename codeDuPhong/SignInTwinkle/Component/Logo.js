import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

function Logo({}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logoContainer}
        source={require("../../../assets/twinkle.jpg")}
      />
    </View>
  );
}

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

export default Logo;
