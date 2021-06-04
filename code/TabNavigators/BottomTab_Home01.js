import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Feather as Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home01 from "../Home/Home/Home01";
import TopSalonScreen from "./screensHome01/TopSalonScreen";
import NavigationCart from "../Navigate/Cart/NavigationCart";
import NotificationScreen from "./screensHome01/NotificationScreen";

const Tab = createBottomTabNavigator();

export default function BottomTab_Home01() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FBFBFB",
      }}
    >
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            // flex: 0.1,
            height: 88,
            paddingHorizontal: 24,
            borderRadius: 24,
            backgroundColor: "#c8d6e5",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
        sceneContainerStyle={{
          backgroundColor: "#FBFBFB",
        }}
      >
        <Tab.Screen
          name="Home01"
          component={Home01}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              if (focused) {
                return (
                  <View style={styles.tabButton}>
                    <Feather name="home" size={size * 0.8} color="white" />
                    <Text style={styles.label}>Home</Text>
                  </View>
                );
              } else {
                return <Feather name="home" size={size * 0.8} color={color} />;
              }
            },
          }}
        />

        <Tab.Screen
          name="NavigationCart"
          component={NavigationCart}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              if (focused) {
                return (
                  <View style={styles.tabButton}>
                    <Feather
                      name="shopping-bag"
                      size={size * 0.8}
                      color="white"
                    />
                    <Text style={styles.label}>Cart</Text>
                  </View>
                );
              } else {
                return (
                  <Feather
                    name="shopping-bag"
                    size={size * 0.8}
                    color={color}
                  />
                );
              }
            },
          }}
        />
        <Tab.Screen
          name="TopSalonScreen"
          component={TopSalonScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              if (focused) {
                return (
                  <View style={styles.tabButton}>
                    <Ionicons
                      name="search-outline"
                      size={size * 0.8}
                      color="white"
                    />
                    <Text style={styles.label}>Search</Text>
                  </View>
                );
              } else {
                return (
                  <Ionicons
                    name="search-outline"
                    size={size * 0.8}
                    color={color}
                  />
                );
              }
            },
          }}
        />

        <Tab.Screen
          name="NotificationScreen"
          component={NotificationScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              if (focused) {
                return (
                  <View style={styles.tabButton}>
                    <Feather name="bell" size={size * 0.8} color="white" />
                    <Text style={styles.label}>Alert</Text>
                  </View>
                );
              } else {
                return <Feather name="bell" size={size * 0.8} color={color} />;
              }
            },
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  tabButtonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  tabButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    minWidth: 90,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#FF6C44",
  },
  label: {
    marginLeft: 8,
    color: "white",
    fontSize: 14,
  },
});
