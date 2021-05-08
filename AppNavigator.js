import React from "react";

import { NavigationContainer } from "@react-navigation/native";

// Stack Navigators
import Navigate from "./code/Navigate";

import CustomDrawerNavigator from "./code/Drawer/CustomDrawerNavigator";

import MaterialTopTabNavigator from "./code/TabNavigators/MaterialTopTabNavigator";

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Navigate />

      {/* <CustomDrawerNavigator /> */}

      {/* TAB NAVIGATORS */}
      {/* <MaterialTopTabNavigator /> */}
    </NavigationContainer>
  );
}
