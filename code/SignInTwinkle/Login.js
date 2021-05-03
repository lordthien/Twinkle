import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import { Ionicons as Icon } from "@expo/vector-icons";
import axios from "axios";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Logo from "../../code/SignInTwinkle/Component/Logo";
import Header from "./Component/Header";
import MiddleInput from "./Component/MiddleInput";
import SwitchButton from "./Component/SwitchButton";
import GilroyText from "./Component/GilroyText";
import Button from "../../code/SignInTwinkle/Component/Button";

const url = "https://training.softech.cloud/api/users/login";

function Login({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  //ngothanhtung.it@outlook.com
  //ngocthien@gmail.com
  const onSignIn = () => {
    const data = {
      email: email,
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
            "Email của bạn chưa đăng ký. Vui lòng kiểm tra lại!"
          );
        } else {
          navigation.navigate("Home01");
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
        <Logo
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
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
        {/* EMAIL */}
        <MiddleInput
          textLable="Email"
          input="Enter Email"
          icon="check-circle-outline"
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        {/* --------------------------------- */}
        {/* PASSWORD */}
        <MiddleInput
          textLable="Password"
          input="Enter your password"
          hidePass={true}
          secureTextEntry="true"
          icon="eye-outline"
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        {/* --------------------------------- */}
        {/* SAVE ME & FORGOT */}
        <View
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <SwitchButton titleSaveMe="Save me" />
          <GilroyText
            textSign="Forgot password"
            onPress={() => {
              navigation.navigate("PasswordRecovery");
            }}
          />
        </View>
        {/* --------------------------------- */}
        {/* LOGIN */}
        <View>
          <Button
            color="#FF6C44"
            titleColor="white"
            title="Sign In"
            onPress={onSignIn}
            // onPress={() => {
            //   navigation.navigate("Home01");
            // }}
          />
        </View>
        {/* --------------------------------- */}
        {/* Begin: Don't have an account */}
        <View style={styles.dontAccountContainer}>
          <GilroyText children="Don't have an account?" />
          <GilroyText
            textSign="Sign Up"
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          />
        </View>
        {/* End: Don't have an account */}
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
        {/* --------------------------------- */}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
