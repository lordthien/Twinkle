import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";

export default class Name extends Component {
  render() {
    return (
      <View style={styles.nameBarberContainer}>
        <Text style={styles.textBarber}>{this.props.textName}</Text>
        <View style={styles.starContainer}>
          <AntDesign name="star" size={18} color="orange" />
          <AntDesign name="star" size={18} color="orange" />
          <AntDesign name="star" size={18} color="orange" />
          <AntDesign name="star" size={18} color="orange" />
          <AntDesign name="staro" size={18} color="orange" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    nameBarberContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      textBarber: {
        fontSize: 20,
        fontWeight: "bold",
      },
    
      starContainer: {
        flexDirection: "row",
      },
});
