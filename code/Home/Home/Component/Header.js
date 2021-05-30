import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

import * as SecureStore from "expo-secure-store";
import { Ionicons } from "@expo/vector-icons";

function Header({ onPress, navigation }) {
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
    <View style={styles.headerContainer}>
      <View style={styles.findContainer}>
        <TouchableOpacity onPress={onPress}>
          <Image
            style={styles.iconHeader}
            source={{
              uri: `http://149.28.137.174:5000/${data.avatar}`,
            }}
          />
        </TouchableOpacity>
        <View style={styles.find}>
          <TouchableOpacity style={styles.iconInputContainer}>
            <Ionicons
              name="search-outline"
              size={24}
              color="black"
              onPress={() => {
                navigation.navigate("TopSalonScreen");
              }}
            />
          </TouchableOpacity>
          <TextInput style={styles.textInputContainer} placeholder="Search" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
  },
  iconHeader: {
    height: 40,
    width: 40,
    marginLeft: 12,
    borderRadius: 20,
  },
  findContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  find: {
    flexDirection: "row",
    height: 40,
    width: 290,
    borderRadius: 12,
    marginLeft: 12,
    backgroundColor: "#898B9A30",
    alignItems: "center",
  },
  iconInputContainer: {
    height: 65,
    fontSize: 20,
    color: "#898B9A",
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  textInputContainer: {
    height: 65,
    fontSize: 20,
    color: "#898B9A",
    marginLeft: 8,
    marginRight: 12,
  },
});
export default Header;
