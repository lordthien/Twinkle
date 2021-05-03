import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  textEmail: {
    fontSize: 14,
    color: "#898B9A",
  },
  inputContainer: {
    height: 56,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#E4E4E4",
    padding: 12,
    marginTop: 8,
    borderRadius: 12,
  },
  inputText: {
    fontSize: 14,
    color: "#898B9A",
  },
  icon: {
    color: "#898B9A",
  },
});

export default class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
    hidepassword: true,
  };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textEmail}>{this.props.textLable}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            secureTextEntry={this.props.hidepassword}
            placeholder={this.props.input}
            onChangeText={(text) => {
              this.props.onChangeText(text)
            }}
          />
          <Icon style={styles.icon} name={this.props.icon} size={24} />
        </View>
      </View>
    );
  }
}
