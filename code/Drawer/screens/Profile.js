/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";

import * as SecureStore from 'expo-secure-store';
import { AntDesign } from "@expo/vector-icons";
import ImageUser from "./ComponentProfile/ImageUser";
import InfoUser from "./ComponentProfile/InfoUser";
import InfoUserEdit from "./ComponentProfile/InfoUserEdit";

const url = "http://149.28.137.174:5000/app/me";

function Profile({ navigation }) {
  const [data, setData] = useState({name: "", email: "", phoneNumber: "", avatar: ""});
  useEffect(() => {
    async function getInformation() {
      let data = JSON.parse(await SecureStore.getItemAsync("customer"));
      setData(data)
    }
    getInformation()
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
              navigation.openDrawer();
            }}
          />
        </TouchableOpacity>
        <Text style={{ marginLeft: 12, fontSize: 16 }}>Profile</Text>
        <TouchableOpacity style={styles.editContainer}>
          <Text style={{ fontSize: 16, color: "#FF6C44" }}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <ImageUser avatar={data.avatar}/>
      </View>
      <View style={styles.infoContainer}>
        {/* <InfoUser /> */}
        <InfoUserEdit name={data.name} email={data.email} phone={data.phoneNumber}/>
      </View>

      {/* <Button
        title="Open Menu"
        onPress={() => {
          navigation.openDrawer();
        }}
      /> */}
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
  editContainer: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 24,
  },
  imageContainer: {
    flex: 0.4,
  },
  infoContainer: {
    flex: 1,
  },
});

export default Profile;
