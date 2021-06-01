import React, { useEffect } from "react";
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
import * as Facebook from "expo-facebook";
import * as SecureStore from 'expo-secure-store';

import Logo from "../Component/Logo";
import Header from "../Component/Header";
import MiddleInput from "../Component/MiddleInput";
import SwitchButton from "../Component/SwitchButton";
import GilroyText from "../Component/GilroyText";
import Button from "../Component/Button";

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
const url = "http://149.28.137.174:5000/app/login";

function Login({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function logInFacebook() {
    try {
      await Facebook.initializeAsync({
        appId: "537314884344603",
      });
      const { type, token, expirationDate, permissions, declinedPermissions } =
        await Facebook.logInWithReadPermissionsAsync({
          permissions: ["public_profile", "email"],
        });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`
        ).then((res) => res.json());
        console.log(response);
        Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch (error) {
      if (error.message == "Already read") {
        navigation.navigate("Home01");
      }
    }
  }

  const onSignIn = async () => {
    const data = {
      email: email,
      password: password,
    };
    //dovanminhan@gmail.com
    let response = await axios
      .post(url, data)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
      });
    if (response.status !== "Success") {
      Alert.alert("Thông báo", response.error);
    } else {
      try {
        await SecureStore.setItemAsync("token", response.token);
        await SecureStore.setItemAsync("customer", 
        JSON.stringify({
          id: response.customer._id,
          avatar: response.customer.avatar,
          name: response.customer.name, 
          email: response.customer.email,
          phoneNumber: response.customer.phoneNumber
        }))
      } catch (error) {
        Alert.alert(error);
      } finally {
        navigation.navigate("Home01");
      }
    }
  };

  useEffect( () => {
    const SignOut = async () => {
      console.log("Sign Out");
      await SecureStore.deleteItemAsync("token");
      await SecureStore.deleteItemAsync("customer");
    };
    SignOut()
  }, []);


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
          onPress={logInFacebook}
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
