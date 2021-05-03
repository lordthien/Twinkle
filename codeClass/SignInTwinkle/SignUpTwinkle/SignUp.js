import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Ionicons as Icon } from "@expo/vector-icons";

import Logo from "../Component/Logo";
import Header from "../Component/Header";
import MiddleInput from "../Component/MiddleInput";
import SwitchButton from "../Component/SwitchButton";
import GilroyText from "../Component/GilroyText";
import Button from "../Component/Button";

// const navigation = useNavigation();
// const route = useRoute();

class SignUp extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* Begin: Logo */}
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        {/* End: Logo */}

        {/* --------------------------------------------------------------------- */}

        {/* Begin: Header */}
        <View style={styles.headerContainer}>
          <Header
            title="Getting Started"
            decription="Create an account to continue!"
          />
        </View>
        {/* End: Header */}

        {/* --------------------------------------------------------------------- */}

        {/* Begin: Middle */}
        <View style={styles.middleContainer}>
          {/* EMAIL */}
          <MiddleInput
            textLable="Email"
            input="Enter Email"
            icon="check-circle-outline"
          />
          {/* ------------------------------- */}
          {/* User Name */}
          <MiddleInput
            textLable="Username"
            input="Enter Username"
            icon="check-circle-outline"
          />
          {/* ------------------------------- */}
          {/* PASSWORD */}
          <MiddleInput
            textLable="Password"
            input="Enter your password"
            hidepassword
            icon="eye-outline"
          />
          {/* ------------------------------- */}
          {/* SAVE ME & FORGOT */}
          <View
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <SwitchButton titleSaveMe="Save me" />
            <GilroyText children="Forgot password" backgroundColor="green" />
          </View>
          {/* ------------------------------- */}
          {/* LOGIN */}
          <View>
            <Button color="#FF6C44" titleColor="white" title="Sign In" />
          </View>
          {/* ------------------------------- */}
          {/* Begin: Don't have an account */}
          <View style={styles.dontAccountContainer}>
            <GilroyText children="Already have an account?" />
            <GilroyText
              textSign="Sign Up"
            />
          </View>
          {/* End: Don't have an account */}
          {/* ------------------------------- */}
        </View>
        {/* End: Middle */}

        {/* --------------------------------------------------------------------- */}

        {/* Begin: Bottom */}
        <View style={styles.bottomContainer}>
          {/* FACEBOOK LOGIN */}
          <Button
            color="#0064C0"
            titleColor="white"
            title="Continue With Facebook"
            icon={<Icon name="logo-facebook" size={18} color="white" />}
          />

          {/* GOOGLE LOGIN */}
          <Button
            color="#F5F5F8"
            titleColor="#898B9A"
            title="Continue With Google"
            image={
              <Image
                style={{ height: 16, width: 16 }}
                source={require("../../assets/google-icon.png")}
              />
            }
          />
        </View>
        {/* End: Bottom */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 0.5,
    height: 60,
    marginTop: 24,
  },
  middleContainer: {
    flex: 4,
  },

  dontAccountContainer: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  bottomContainer: {
    flex: 1.5,
    marginTop: 30,
  },
});

export default SignUp;