import React from "react";

import { NavigationContainer } from "@react-navigation/native";

// Stack Navigators
import Navigate from "./code/Navigate";

import CustomDrawerNavigator from "./code/Drawer/CustomDrawerNavigator";

import BottomTabNavigator from "./code/TabNavigators/BottomTabNavigator";
import BottomTabNavigator_Eatme from "./code/TabNavigators/BottomTabNavigator_Eatme";

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Navigate />

      {/* <CustomDrawerNavigator /> */}

      {/* TAB NAVIGATORS */}
      {/* <BottomTabNavigator /> */}
      {/* <BottomTabNavigator_Eatme /> */}
    </NavigationContainer>
  );
}
