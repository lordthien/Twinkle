import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function InfoUser({name, email, phone}) {
  return (
    <View style={styles.textContainer}>
      <View style={styles.boxContainer}>
        <Text style={styles.nameContainer}>Name</Text>
        <Text style={styles.textName}>{name}</Text>
      </View>
      <View style={styles.boxContainer}>
        <Text style={styles.nameContainer}>Email</Text>
        <Text style={styles.textName}>{email}</Text>
      </View>
      <View style={styles.boxContainer}>
        <Text style={styles.nameContainer}>Phone Number</Text>
        <Text style={styles.textName}>{phone}</Text>
      </View>
      {/* <TouchableOpacity style={styles.boxContainer}>
        <Text style={styles.nameContainer}>Password</Text>
        <Text style={styles.textName}>*********</Text>
      </TouchableOpacity> */}
      <View style={styles.saveContainer}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.textSave}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    marginTop: 12,
  },
  boxContainer: {
    backgroundColor: "#bdc3c750",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    marginLeft: 14,
    marginRight: 14,
    marginBottom: 12,
  },
  nameContainer: {
    fontSize: 14,
    fontWeight: "500",
    color: "gray",
  },
  textName: {
    fontSize: 14,
    fontWeight: "500",
  },
  textSave: {
    fontSize: 14,
    fontWeight: "500",
    color: "white",
  },

  saveContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  saveButton: {
    height: 50,
    width: 200,
    borderRadius: 12,
    backgroundColor: "#FF6C44",
    justifyContent: "center",
    alignItems: "center",
  },

  // ---------------
  leftContainer: {
    marginLeft: 160,
  },
});
