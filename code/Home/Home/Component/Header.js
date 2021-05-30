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
    avatar: "public/app/avatar.png",
  });
  useEffect(() => {
    async function getInformation() {
      try {
        let data = JSON.parse(await SecureStore.getItemAsync("customer"));
        if(data) setData(data);
      } catch (error) {
      }
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
        {/* <View style={styles.find}>
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
        </View> */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.logoContainer}
            source={require("../../../../assets/Twinkle_text.png")}
          />
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
  imageContainer: {
    flex: 1,
    alignItems: "center",
    marginRight: 42,
  },
  logoContainer: {
    width: 120,
    height: 30,
  },
  // find: {
  //   flexDirection: "row",
  //   height: 40,
  //   width: 290,
  //   borderRadius: 12,
  //   marginLeft: 12,
  //   backgroundColor: "#898B9A30",
  //   alignItems: "center",
  // },
  // iconInputContainer: {
  //   height: 65,
  //   fontSize: 20,
  //   color: "#898B9A",
  //   marginLeft: 8,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // textInputContainer: {
  //   height: 65,
  //   fontSize: 20,
  //   color: "#898B9A",
  //   marginLeft: 8,
  //   marginRight: 12,
  // },
});
export default Header;
