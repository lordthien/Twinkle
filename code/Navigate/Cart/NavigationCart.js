import React from "react";

import CartScreen from "../../TabNavigators/screensHome01/CartScreen";
import CartCancel from "../../TabNavigators/screensHome01/ComponentCartScreen/CartCancel";
import CartCompleted from "../../TabNavigators/screensHome01/ComponentCartScreen/CartCompleted";
import ReviewScreen from "../../TabNavigators/screensHome01/ComponentCartScreen/InfoBookScreen/ReviewScreen";
// import Review from "../../TabNavigators/screensHome01/ComponentCartScreen/InfoBookScreen/Review";

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function NavigationCart() {
  return (
    <Stack.Navigator /*headerMode="screen"*/>
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CartCancel"
        component={CartCancel}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CartCompleted"
        component={CartCompleted}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ReviewScreen"
        component={ReviewScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name="Review"
        component={Review}
        options={{
          headerShown: false,
        }}
      /> */}
    </Stack.Navigator>
  );
}
