import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons as Icon } from "@expo/vector-icons";

const styles = StyleSheet.create({
  loginButton: {
    flexDirection: "row",
    marginHorizontal: 12,
    marginTop: 12,
    height: 50,
    //width: 327,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  loginText: {
    marginLeft: 8,
    color: "#FF6C44",
    fontSize: 16,
    //fontFamily: "SVN-Gilroy-SemiBold",
  },

  textContainer: {
    fontSize: 16,
    //fontFamily: "SVN-Gilroy-SemiBold",
    color: "#FF6C44",
    marginLeft: 8,
  },
});

export default class Button extends Component {
  render() {
    return (
      // <View style={styles.buttonContainer}>
      //     <Icon
      //     name="logo-facebook" size={16}
      //     />
      //     <Text style={styles.textContainer}>LOGIN</Text>
      // </View>
      <TouchableOpacity
        style={[styles.loginButton, { backgroundColor: this.props.color }]}
        onPress={this.props.onPress}
      >
        {this.props.icon}
        {this.props.image}
        <Text style={[styles.loginText, { color: this.props.titleColor }]}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}
