import React from "react";

import { NavigationContainer } from "@react-navigation/native";

// Stack Navigators
import Navigate from "./code/Navigate";

import CustomDrawerNavigator from "./code/Drawer/CustomDrawerNavigator";

import MaterialTopTabNavigator from "./code/TabNavigators/MaterialTopTab_Book";

import BottomTab_Home01 from "./code/TabNavigators/BottomTab_Home01";

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Navigate />

      {/* <CustomDrawerNavigator /> */}

      {/* TAB NAVIGATORS */}
      {/* <MaterialTopTabNavigator /> */}
      {/* <BottomTab_Home01 /> */}
    </NavigationContainer>
  );
}
