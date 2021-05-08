import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

export default function BoxServiceSelect({ onPress }) {
  return (
    <TouchableOpacity style={styles.boxTime2} onPress={onPress}>
      <FontAwesome
        style={{ marginLeft: 16 }}
        name="cut"
        size={30}
        color="black"
      />
      <Text style={{ marginLeft: 12, fontSize: 16, fontWeight: "500" }}>
        Services selected
      </Text>
      <EvilIcons
        style={{ marginLeft: 125 }}
        name="chevron-down"
        size={30}
        color="black"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boxTime2: {
    flexDirection: "row",
    marginTop: 12,
    height: 64,
    width: 350,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 12,
    borderRadius: 8,
  },
});
