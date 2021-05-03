import React from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert
} from "react-native";

import axios from "axios";

import { Ionicons as Icon } from "@expo/vector-icons";

import Logo from "../Component/Logo";
import Header from "../Component/Header";
import MiddleInput from "../Component/MiddleInput";
import SwitchButton from "../Component/SwitchButton";
import GilroyText from "../Component/GilroyText";
import Button from "../Component/Button";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const url = "https://training.softech.cloud/api/users/login";

function SignUp() {
  const [email, setEmail] = React.useState("");
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
//ngocthien@gmail.com
//123456789
//Ngô Ngọc Thiện
  const onSignUp = () => {
    const data = {
      email: email,
      user: user,
      password: password,
    };
    axios
      .post(url, data)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        console.log("--------------------------------");
        if (response.data.ok === false) {
          Alert.alert(
            "Thông báo",
            "Email của bạn đã được đăng ký. Vui lòng kiểm tra lại!"
          );
        } else {
          Alert.alert("Thông báo", "Đăng ký thành công");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        {/* ------------------------------- */}
        {/* User Name */}
        <MiddleInput
          textLable="Username"
          input="Enter Username"
          icon="check-circle-outline"
          onChangeText={(text) => {
            setUser(text);
          }}
        />
        {/* ------------------------------- */}
        {/* PASSWORD */}
        <MiddleInput
          textLable="Password"
          input="Enter your password"
          hidePass={true}
          icon="eye-outline"
          onChangeText={(text) => {
            setPassword(text);
          }}
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
          <Button
            color="#FF6C44"
            titleColor="white"
            title="Sign In"
            onPress={onSignUp}
          />
        </View>
        {/* ------------------------------- */}
        {/* Begin: Don't have an account */}
        <View style={styles.dontAccountContainer}>
          <GilroyText children="Already have an account?" />
          <GilroyText textSign="Sign Up" />
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
              source={require("../../../assets/google-icon.png")}
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
