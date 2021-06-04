import React, { useEffect, useState } from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";

import * as SecureStore from "expo-secure-store";
import Settings from "./screens/Settings";
import NavigateProfile from "./screens/NavigateProfile";
import Navigate from "../Navigate";
import Login from "../SignInTwinkle/SignIn/Login";
import BottomTab_Home01 from "../TabNavigators/BottomTab_Home01";

const Drawer = createDrawerNavigator();

const CustomDrawerNavigator = ({ navigation }) => {
  return (
    <Drawer.Navigator
      drawerPosition="left"
      drawerContentOptions={{
        activeBackgroundColor: "#FF6C44",
        activeTintColor: "#ffffff",
        inactiveTintColor: "#111A2C",
        labelStyle: { fontWeight: "700" },
      }}
    >
      <Drawer.Screen
        name="BottomTab_Home01"
        component={BottomTab_Home01}
        options={{
          title: "Home",
          drawerIcon: ({ color, size }) => (
            <Icon color={color} size={size} name="home" />
          ),
        }}
      />
      <Drawer.Screen
        name="NavigateProfile"
        component={NavigateProfile}
        options={{
          title: "Profile",
          drawerIcon: ({ color, size }) => (
            <Icon color={color} size={size} name="user" />
          ),
        }}
      />
      <Drawer.Screen
        name="Menu1"
        component={Settings}
        options={{
          title: "Settings",
          drawerIcon: ({ color, size }) => (
            <Icon color={color} size={size} name="settings" />
          ),
        }}
      />
      <Drawer.Screen
        name="Navigate"
        component={Navigate}
        options={{
          title: "Sign out",
          drawerIcon: ({ color, size }) => (
            <Icon color={color} size={size} name="log-out" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default CustomDrawerNavigator;
