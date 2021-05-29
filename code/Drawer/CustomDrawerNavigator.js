import * as React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as Facebook from "expo-facebook";

import Settings from "./screens/Settings";
import Profile from "./screens/Profile";
import Home01 from "../Home/Home/Home01";
import Navigate from "../Navigate";
import Login from "../SignInTwinkle/SignIn/Login";
import BottomTab_Home01 from "../TabNavigators/BottomTab_Home01";
import { Button } from "react-native";

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
        name="Menu2"
        component={Profile}
        options={{
          title: "Profile",
          drawerIcon: ({ color, size }) => (
            <Icon color={color} size={size} name="user" />
          ),
        }}
      />

      <Drawer.Screen
        name="Login"
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
