import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, SafeAreaView } from "react-native";
import axios from "axios";

import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CutHair from "./screensBook/CutHair";

const Tab = createMaterialTopTabNavigator();

const ICON_SIZE = 24;
const ACTIVE_COLOR = "#FF6C44";
const INACTIVE_COLOR = "#898B9A";

const MaterialTopTab_Book = ({ navigation, route }) => {
  const [types, setTypes] = useState([{ services: {} }]);
  const [selectedServices, setSelectedServices] = useState([]);
  const url = `http://149.28.137.174:5000/app/servicesByStoreId?id=${route.params.storeId}`;
  useEffect(() => {
    let getData = async () => {
      let result = await axios
        .get(url)
        .then((res) => res.data)
        .catch((err) => {
          throw err;
        });
      setTypes(result.types);
    };
    getData();
    return;
  }, []);
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
            width: 128,
            justifyContent: "center",
            alignItems: "center",
          },
          indicatorStyle: {
            backgroundColor: ACTIVE_COLOR,
          },
        }}
        sceneContainerStyle={{ backgroundColor: "gray" }}
      >
        {types.map((type) => (
          <Tab.Screen
            name={`${type.name}`}
            component={() => (
              <CutHair
                navigation={navigation}
                data={type}
                selectedServices={selectedServices}
                setSelectedServices={setSelectedServices}
                store={route.params.storeId}
                staff={route.params.staff}
                time={route.params.selectTime}
              />
            )}
            options={{
              title: `${type.name}`,
              tabBarIcon: ({ focused, color }) => (
                <FontAwesome5
                  name={focused ? type.iconString : type.iconString }
                  size={ICON_SIZE}
                  color={color}
                />
              ),
            }}
          />
        ))}
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
