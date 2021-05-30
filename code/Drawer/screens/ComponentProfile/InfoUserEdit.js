import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function InfoUser({ name, email, phone }) {
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const [newPhone, setNewPhone] = useState(phone);
  let onSavePress = async () => {};
  return (
    <View style={styles.textContainer}>
      <View style={styles.boxContainer}>
        <Text style={styles.nameContainer}>Name</Text>
        {/* <Text style={styles.textName}>{name}</Text> */}
        <TextInput style={styles.textName} placeholder={"Name"}>{name}</TextInput>
      </View>
      <View style={styles.boxContainer}>
        <Text style={styles.nameContainer}>Email</Text>
        {/* <Text style={styles.textName}>{email}</Text> */}
        <TextInput style={styles.textName} placeholder={"Email"}>{email}</TextInput>
      </View>
      <View style={styles.boxContainer}>
        <Text style={styles.nameContainer}>Phone Number</Text>
        <TextInput style={styles.textName} placeholder={"0123456789"}>{phone}</TextInput>
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
});
