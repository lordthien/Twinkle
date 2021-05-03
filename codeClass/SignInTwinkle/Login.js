import React from "react";
import { SafeAreaView, Text, View, StyleSheet, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Ionicons as Icon } from "@expo/vector-icons";

import Logo from "../code/SignInTwinkle/Component/Logo";
import Header from "../code/SignInTwinkle/Component/Header";
import MiddleInput from "../code/SignInTwinkle/Component/MiddleInput";
import SwitchButton from "../code/SignInTwinkle/Component/SwitchButton";
import GilroyText from "../code/SignInTwinkle/Component/GilroyText";
import Button from "../code/SignInTwinkle/Component/Button";

function Login({}) {
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
          title="Let's Sign You In"
          decription="Welcome back, you've been missed!"
        />
      </View>
      {/* End: Header */}
      {/* --------------------------------------------------------------------- */}
      {/* Begin: Middle */}
      <View style={styles.middleContainer}>
        {/* ------------------------------------------------- */}
        {/* EMAIL */}
        <MiddleInput
          textLable="Email"
          input="Enter Email"
          icon="check-circle-outline"
        />
        {/* ------------------------------------------------- */}
        {/* PASSWORD */}
        <MiddleInput
          textLable="Password"
          hidepassword
          input="Enter your password"
          icon="eye-outline"
        />
        {/* ------------------------------------------------- */}
        {/* SAVE ME & FORGOT */}
        <View
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <SwitchButton titleSaveMe="Save me" />
          <GilroyText children="Forgot password" />
        </View>
        {/* ------------------------------------------------- */}
        {/* LOGIN */}
        <View>
          <Button color="#FF6C44" titleColor="white" title="Sign In" />
        </View>
        {/* ------------------------------------------------- */}
        {/* Begin: Don't have an account */}
        <View style={styles.dontAccountContainer}>
          <GilroyText children="Don't have an account?" />
          <GilroyText
            textSign="Sign Up"
            onPress={() => navigation.navigate("SignUp")}
          />
          {/* <Button
                title="Sign Up"
                onPress={() => navigation.navigate("SignUp")}
              /> */}
        </View>
        {/* End: Don't have an account */}

        {/* ------------------------------------------------- */}
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
              source={require("../assets/google-icon.png")}
            />
          }
        />
      </View>
      {/* End: Bottom */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    height: 60,
    marginTop: 24,
  },
  middleContainer: {
    flex: 4,
  },
  dontAccountContainer: {
    flex: 1,
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  bottomContainer: {
    flex: 1.5,
  },
});

export default Login;
