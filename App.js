import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { View, SafeAreaView, Platform } from "react-native";

// import Login from "./code/SignInTwinkle/Login";
// import SignUp from "./code/SignInTwinkle/SignUpTwinkle/SignUp";
// import OTP from "./code/SignInTwinkle/OTPAuthen/OTP";
// import PasswordRecovery from "./code/SignInTwinkle/PasswordRecovery/PasswordRecovery";
// import ResetPassword from "./code/SignInTwinkle/PasswordRecovery/ResetPassword";
// import ResetPasswordComplete from "./code/SignInTwinkle/PasswordRecovery/ResetPasswordComplete";

import Home01 from "./code/Home/Home/Home01";
import HomeBarber from "./code/Home/Barber/HomeBarber";
import Book from "./code/Home/Book/Book";
import MaterialTopTabNavigator from "./code/TabNavigators/MaterialTopTabNavigator";

import SelectDateTime from "./code/Home/Book/ComponentBook/SelectDateTime";
import InfoBook from "./code/Home/InfoBook/InfoBook";

import AppNavigator from "./AppNavigator";

class App extends Component {
  render() {
    return <AppNavigator />
    return (
      <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
        <View
          style={{
            minWidth: 375,
            minHeight: Platform.OS === "web" ? 812 : null,
          }}
        >
          {/* <Login /> */}
          {/* <SignUp /> */}
          {/* <OTP /> */}
          {/* <PasswordRecovery /> */}
          {/* <ResetPassword /> */}
          {/* <ResetPasswordComplete /> */}

          {/* <Home01 /> */}
          {/* <HomeBarber /> */}
          {/* <Book /> */}

          <SelectDateTime />
          {/* <InfoBook /> */}
        </View>
      </SafeAreaView>
    );
  }
}

export default App;
