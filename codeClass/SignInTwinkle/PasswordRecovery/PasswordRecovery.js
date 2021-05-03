import React, { Component } from "react";
import { Text, StyleSheet, View, Image, TextInput, Alert } from "react-native";

import axios from "axios";

import Logo from "../Component/Logo";
import Header from "../Component/Header";
import MiddleInput from "../Component/MiddleInput";
import Button from "../Component/Button";

import ResetPassword from "./ResetPassword";

export default class OTP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      //ngothanhtung.it@outlook.com
    };
  }

  componentDidMount() {
    this.ForgotPassword();
  }
  ForgotPassword = () => {
    const url = "https://training.softech.cloud/api/users/forgot-password";
    const data = {
      email: this.state.email,
    };

    axios
      .post(url, data)
      .then((result) => {
        this.setState(result.data);
        //console.log(result.data);
        if (result.data.success === false) {
          Alert.alert(
            "Thông báo",
            "Email của bạn chưa đăng ký. Vui lòng kiểm tra lại!"
          );
        } else {
          Alert.alert("Thông báo", "Chúng tôi đã gửi mã OTP đến email của bạn");
        }
      })
      .catch(() => {
        console.log(error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <View style={styles.headerContainer}>
          <Header
            title="Password Recovery"
            decription="Please enter your email address to recover"
            dec="your password"
          />
        </View>
        <View style={styles.middleContainer}>
          <MiddleInput
            textLable="Email"
            input="Enter Email"
            icon="check-circle-outline"
            value={this.state.email}
            onChangeText={(text) => {
              this.setState({ email: text });
            }}
          />
          {/* LOGIN */}
          <View>
            <Button
              color="#FF6C44"
              titleColor="white"
              title="Send Email"
              onPress={this.ForgotPassword}
            />
          </View>
          {/* <Text>{this.state.email}</Text> */}
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
});
