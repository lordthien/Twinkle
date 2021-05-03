import React, { Component } from "react";
import { Text, View, StyleSheet, Switch } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  saveMeText: {
    marginLeft: 8,
    //fontFamily: "SVN-Gilroy-Regular",
    color: "#898B9A",
  },
});

export default class SwitchButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Switch
          trackColor={{ false: "#898B9A", true: "#FF6C44" }}
          ios_backgroundColor="#898B9A"
          thumbColor={"#ffffff"}
          onValueChange={() => {}}
          value={false}
          // ------------------------------------------
          // trackColor={{ false: "#767577", true: "#81b0ff" }}
          // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          // ios_backgroundColor="#3e3e3e"
          // onValueChange={toggleSwitch}
          // value={isEnabled}
        />
        <Text style={styles.saveMeText}>{this.props.titleSaveMe}</Text>
      </View>
    );
  }
}
