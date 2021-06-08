import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";

export default class Star2 extends Component {
  state = {
    index: -1,
  };

  render() {
    return (
      <View style={styles.container}>
        {this.props.sizes.map((item, i) => {
          return (
            <TouchableOpacity
              key={i}
              style={this.state.index === i ? styles.selectedBox : styles.box}
              onPress={() => {
                this.setState({ index: i });
              }}
            >
              <Text
                style={
                  this.state.index === i ? styles.selectedText : styles.text
                }
              >
                <AntDesign
                  style={this.state.index === i ? "white" : "black"}
                  name="staro"
                  size={20}
                >
                  {item.name}
                </AntDesign>
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  selectedBox: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
    height: 40,
    width: 40,
    borderRadius: 8,
    backgroundColor: "#FF6C44",
  },

  box: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
    borderColor: "#BBBDC1",
    borderWidth: 1,
    height: 40,
    width: 40,
    borderRadius: 8,
    backgroundColor: "#ffffff",
  },

  selectedText: {
    color: "#ffffff",
  },

  text: {
    color: "#2c3e50",
  },
});
