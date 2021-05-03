import React, { Component } from "react";
import { Text, StyleSheet, View, Image, TextInput } from "react-native";

import Svg, { SvgXml } from "react-native-svg";

import Logo from "../Component/Logo";
import Header from "../Component/Header";
import svgComplete from "./svgComplete";
import Button from "../Component/Button";

export default class OTP extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <View style={styles.headerContainer}>
          <Header
            title="Congratulations!"
            decription="You successfully rest your password."
            dec="Now you are good to go"
          />
        </View>
        <View style={styles.middleContainer}>
          {/* IMAGE */}
          <View style={styles.imageContainer}>
            <SvgXml xml={svgComplete} />
          </View>

          {/* LOGIN */}
          <View style={styles.buttonContainer}>
            <Button
              color="#FF6C44"
              titleColor="white"
              title="Jump Into Log In"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
  },
  middleContainer: {
    flex: 4,
  },
  imageContainer: {
    flex: 3,
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 24,
  },
});
