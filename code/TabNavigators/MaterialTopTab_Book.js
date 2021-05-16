import React from "react";
import { StyleSheet, View, TouchableOpacity, SafeAreaView } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CutHair from "./screensBook/CutHair";
import Uon from "./screensBook/Uon";
import Nhuom from "./screensBook/Nhuom";
import More from "./screensBook/More";
import { AntDesign } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();

const ICON_SIZE = 24;
const ACTIVE_COLOR = "#FF6C44";
const INACTIVE_COLOR = "#898B9A";

const MaterialTopTab_Book = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.iconContainer}>
          <AntDesign
            name="left"
            size={24}
            color="black"
            onPress={() => {
              navigation.navigate("Book");
            }}
          />
        </TouchableOpacity>
      </View>
      <Tab.Navigator
        // initialRouteName="More"
        tabBarPosition="top"
        tabBarOptions={{
          activeTintColor: ACTIVE_COLOR,
          inactiveTintColor: INACTIVE_COLOR,
          style: { backgroundColor: "white" },
          labelStyle: { textTransform: "none", fontSize: 16 },
          // scrollEnabled: true,
          showIcon: true,
          showLabel: true,
          tabStyle: {
            width: 93.7,
            justifyContent: "center",
            alignItems: "center",
            //marginTop: 80,
          },
          indicatorStyle: {
            backgroundColor: ACTIVE_COLOR,
          },
        }}
        sceneContainerStyle={{ backgroundColor: "gray" }}
      >
        <Tab.Screen
          name="CutHair"
          component={CutHair}
          options={{
            title: "Cut Hair",
            tabBarIcon: ({ focused, color }) => (
              <Icon
                name={focused ? "home" : "home-outline"}
                size={ICON_SIZE}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Uon"
          component={Uon}
          options={{
            title: "Uốn",
            tabBarIcon: ({ focused, color }) => (
              <Icon
                name={focused ? "cart" : "cart-outline"}
                size={ICON_SIZE}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Nhuộm"
          component={Nhuom}
          options={{
            title: "Nhuộm",
            tabBarIcon: ({ focused, color }) => (
              <Icon
                name={focused ? "cart" : "cart-outline"}
                size={ICON_SIZE}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="More"
          component={More}
          options={{
            title: "More",
            tabBarIcon: ({ focused, color }) => (
              <Icon
                name={focused ? "heart" : "heart-outline"}
                size={ICON_SIZE}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tabButtonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  iconContainer: {
    height: 40,
    width: 40,
    backgroundColor: "#bdc3c787",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginLeft: 12,
    marginBottom: 4,
  },

  tabButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 90,
    borderRadius: 45,
    backgroundColor: "#FF6C44",
  },
  label: {},
});
export default MaterialTopTab_Book;
