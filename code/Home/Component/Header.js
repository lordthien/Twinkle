import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

function Header({onPress}) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.findContainer}>
        <TouchableOpacity onPress={onPress}>
          <Image
            style={styles.iconHeader}
            source={require("../../../assets/icon/avatar.jpeg")}
          />
        </TouchableOpacity>
        <View style={styles.find}>
          <TextInput style={styles.textInputContainer} placeholder="Search" />
        </View>
        <TouchableOpacity style={styles.iconNoti}>
          <Ionicons name="notifications" size={24} color="#A8A8A8" />
        </TouchableOpacity>
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
    justifyContent: "space-between",
    alignItems: "center",
  },
  find: {
    height: 40,
    width: 255,
    borderRadius: 12,
    backgroundColor: "#898B9A30",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  textInputContainer: {
    height: 65,
    fontSize: 20,
    color: "#898B9A",
    marginLeft: 12,
    marginRight: 12,
  },
  iconNoti: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
    marginRight: 8,
  },
});
export default Header;
