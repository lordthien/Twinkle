import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import Navigate from "./code/Navigate";

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Navigate />
    </NavigationContainer>
  );
}
