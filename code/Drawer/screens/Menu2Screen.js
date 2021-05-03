/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { View, Text, Button } from "react-native";

const Menu2Screen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Profile</Text>
      <Button
        title="Open Menu"
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    </View>
  );
};

export default Menu2Screen;
