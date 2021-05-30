/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import * as SecureStore from "expo-secure-store";
import { AntDesign } from "@expo/vector-icons";
import ImageUser from "./ComponentProfile/ImageUser";
import InfoUserEdit from "./ComponentProfile/InfoUserEdit";

const url = "http://149.28.137.174:5000/app/me";

function ProfileEdit({ navigation }) {
  const [data, setData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    avatar: "",
  });
  useEffect(() => {
    async function getInformation() {
      let data = JSON.parse(await SecureStore.getItemAsync("customer"));
      setData(data);
    }
    getInformation();
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
              navigation.navigate("Profile");
              // navigation.openDrawer();
            }}
          />
        </TouchableOpacity>
        <Text style={{ marginLeft: 12, fontSize: 16 }}>Profile</Text>
      </View>
      <View style={styles.imageContainer}>
        <ImageUser avatar={data.avatar} />
      </View>
      <View style={styles.infoContainer}>
        <InfoUserEdit
          name={data.name}
          email={data.email}
          phone={data.phoneNumber}
        />
      </View>
      <View style={styles.saveContainer}>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <Text style={styles.textSave}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    height: 43,
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
  imageContainer: {
    flex: 0.4,
  },
  infoContainer: {
    flex: 0.5,
  },

  textSave: {
    fontSize: 14,
    fontWeight: "500",
    color: "white",
  },

  saveContainer: {
    flex: 0.5,
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
});

export default ProfileEdit;
