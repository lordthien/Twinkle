import React, { Component } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

export default class Square extends Component {
  render() {
    return (
      <View style={styles.square}>
        <TextInput style={styles.textInputContainer} placeholder="." />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  square: {
    height: 65,
    width: 65,
    backgroundColor: "#F5F5F8",
    marginTop: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  textInputContainer: {
    height: 65,
    fontSize: 20,
    //fontFamily: "SVN-Gilroy-Medium",
    color: "#898B9A",
  },
});
