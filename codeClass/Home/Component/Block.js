import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

import { Feather } from "@expo/vector-icons";

export default class Block extends Component {
  // state = {
  //   selectItem: 0,
  // };

  render() {
    return (
      <TouchableOpacity style={styles.block}>
        <View style={styles.blockContainer}>{this.props.icon}</View>
        <View style={styles.textBlock}>
          <Text style={styles.textBl}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  block: {
    // flex: 1,
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
