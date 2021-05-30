import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Profile from "./Profile";
import ProfileEdit from "./ProfileEdit";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <Stack.Navigator /*headerMode="screen"*/>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProfileEdit"
        component={ProfileEdit}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
