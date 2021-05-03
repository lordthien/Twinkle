import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
const styles = StyleSheet.create({
  container: {
    marginRight: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  text: {
    color: "#898B9A",
  },
  textColor: {
    color: "#FF6C44",
  },
});
export default class GilroyText extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.children}</Text>
        <TouchableOpacity>
          <Text
            style={styles.textColor}
            onPress={() => navigation.goBack("Login")}
          >
            {this.props.textSign}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
