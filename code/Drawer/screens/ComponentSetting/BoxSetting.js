import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function BoxSetting() {
  return (
    <View>
      <TouchableOpacity style={styles.boxContainer}>
        <MaterialIcons name="language" size={24} color="black" />
        <Text style={styles.textContainer}>Languages    </Text>
        <AntDesign
          style={styles.leftContainer}
          name="right"
          size={18}
          color="black"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.boxContainer}>
        <AntDesign name="questioncircleo" size={24} color="black" />
        <Text style={styles.textContainer}>FAQs              </Text>
        <AntDesign
          style={styles.leftContainer}
          name="right"
          size={18}
          color="black"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.boxContainer}>
      <MaterialIcons name="lock-outline" size={24} color="black" />
        <Text style={styles.textContainer}>Private Policy</Text>
        <AntDesign
          style={styles.leftContainer}
          name="right"
          size={18}
          color="black"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.boxContainer}>
      <Feather name="headphones" size={24} color="black" />
        <Text style={styles.textContainer}>Support         </Text>
        <AntDesign
          style={styles.leftContainer}
          name="right"
          size={18}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  boxContainer: {
    flexDirection: "row",
    height: 65,
    backgroundColor: "#bdc3c750",
    marginLeft: 12,
    marginRight: 12,
    borderRadius: 16,
    marginTop: 12,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 12,
  },
  textContainer: {
    fontSize: 16,
    marginLeft: 12,
  },
  leftContainer: {
    marginLeft: 160,
  },
});
