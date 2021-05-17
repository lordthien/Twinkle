/* eslint-disable react-native/no-inline-styles */
import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import BoxSetting from "./ComponentSetting/BoxSetting";

const Settings = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.iconContainer}>
          <AntDesign
            name="left"
            size={24}
            color="black"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        </TouchableOpacity>
        <Text style={{ marginLeft: 12, fontSize: 16 }}>Settings</Text>
      </View>
      <View>
        <BoxSetting />
      </View>
{/* 
      <Button
        title="Open Menu"
        onPress={() => {
          navigation.openDrawer();
        }}
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    height: 43,
    width: 255,
    alignItems: "center",
  },

  iconContainer: {
    height: 40,
    width: 40,
    backgroundColor: "#bdc3c787",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginLeft: 12,
  },
  
});

export default Settings;
