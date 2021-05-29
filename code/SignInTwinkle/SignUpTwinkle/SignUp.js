import React from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
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

const url = "http://149.28.137.174:5000/app/signup";

function SignUp({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  //ngocthien@gmail.com
  //123456789
  //Ngô Ngọc Thiện
  const onSignUp = async () => {
    try {
      const data = {
        email: email,
        name: name,
        password: password,
      };
      // let res = await fetch(url, {
      //   method: 'POST',
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(data)
      // })
      axios.post(url, data)
        .then((response) => {
          console.log(response)
          console.log(JSON.stringify(response.data));
          console.log("--------------------------------");
          if (response.data.ok === false) {
            Alert.alert(
              "Thông báo",
              "Email của bạn đã được đăng ký. Vui lòng kiểm tra lại!"
            );
          } else {
            navigation.navigate("Login");
          }
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(res)
    } catch (error) {
      console.log(error.response)
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
          {/* User's Name */}
          <MiddleInput
            textLable="Your Name"
            input="Enter Your Name"
            icon="check-circle-outline"
            onChangeText={(text) => {
              setName(text);
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
          {/* LOGIN */}
          <View>
            <Button
              color="#FF6C44"
              titleColor="white"
              title="Sign Up"
              onPress={onSignUp}
              // onPress={() => {
              //   navigation.navigate("Login");
              // }}
            />
          </View>
          {/* ------------------------------- */}
          {/* Begin: Don't have an account */}
          <View style={styles.dontAccountContainer}>
            <GilroyText children="Already have an account?" />
            <GilroyText
              textSign="Sign In"
              onPress={() => {
                navigation.navigate("Login");
              }}
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
                source={require("../../../assets/google-icon.png")}
              />
            }
          />
        </View>
        {/* End: Bottom */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
