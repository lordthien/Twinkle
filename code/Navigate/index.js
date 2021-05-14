import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Login from "../SignInTwinkle/SignIn/Login";
import SignUp from "../SignInTwinkle/SignUpTwinkle/SignUp";
import PasswordRecovery from "../SignInTwinkle/PasswordRecovery/PasswordRecovery";
import OTP from "../SignInTwinkle/OTPAuthen/OTP";
import ResetPassword from "../SignInTwinkle/PasswordRecovery/ResetPassword";
import ResetPasswordComplete from "../SignInTwinkle/PasswordRecovery/ResetPasswordComplete";
// import Home01 from "../Home/Home01";
import HomeBarber from "../Home/Barber/HomeBarber";
import Book from "../Home/Book/Book";
import InfoBook from "../Home/InfoBook/InfoBook";

import CustomDrawerNavigator from "../Drawer/CustomDrawerNavigator";
import MaterialTopTab_Book from "../TabNavigators/MaterialTopTab_Book";
import BottomTab_Home01 from "../TabNavigators/BottomTab_Home01";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <Stack.Navigator /*headerMode="screen"*/>
      <Stack.Screen
        name="Home01"
        component={CustomDrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
      {/* ---------------------------- */}
      {/* <Stack.Screen
        name="Home01"
        component={CustomDrawerNavigator}
        options={{
          headerShown: false,
        }}
      /> */}
      {/* -------------------------- */}
      <Stack.Screen
        name="HomeBarber"
        component={HomeBarber}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Book"
        component={Book}
        options={{
          headerShown: false,
        }}
      />
      {/* ------------- */}
      <Stack.Screen
        name="MaterialTopTabNavigator"
        component={MaterialTopTab_Book}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="InfoBook"
        component={InfoBook}
        options={{
          headerShown: false,
        }}
      />
      {/* ------------------- */}
      <Stack.Screen
        name="OTP"
        component={OTP}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PasswordRecovery"
        component={PasswordRecovery}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResetPasswordComplete"
        component={ResetPasswordComplete}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
