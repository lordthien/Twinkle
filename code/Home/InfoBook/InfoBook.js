import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import TextHeaderInfo from "./ComponentInfoBook/TextHeaderInfo";
import BookNow from "../Barber/ComponentBarber/BookNow";
import BoxServiceSelect from "./ComponentInfoBook/BoxServiceSelect";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

function InfoBook() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.text}>Thông Tin Đặt Lịch</Text>
      </View>
      <View style={styles.textHeader}>
        <TextHeaderInfo title="1. SALON SELECTED" />

        <View style={styles.salonSelectContainer}>
          <Ionicons
            style={{ marginLeft: 12, marginRight: 12 }}
            name="home-outline"
            size={24}
            color="black"
          />
          <Text style={styles.text}>Barber A Loi</Text>
        </View>
      </View>

      <View style={styles.textHeader}>
        <TextHeaderInfo title="2. SERVICED" />
        <BoxServiceSelect />
        <View style={styles.boxTime}></View>
      </View>

      <View style={styles.textHeader}>
        <TextHeaderInfo title="3. TIMED" />
        <View style={styles.salonSelectContainer}>
          <FontAwesome
            style={{ marginLeft: 12, marginRight: 12 }}
            name="calendar-times-o"
            size={24}
            color="black"
          />
          <Text style={styles.text}>14:00 PM</Text>
        </View>
      </View>

      <View style={styles.textHeader}>
        <TextHeaderInfo title="4. NOTES" />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            placeholder={"VD: Anh đi 3 người/ Anh đi cùng con"}
            // onChangeText={(text) => {
            //   onChangeText(text);
            // }}
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <BookNow
          title="COMPLETE"
          onPress={() => {
            navigation.navigate("MaterialTopTabNavigator");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginTop: 12,
    marginLeft: 87,
    height: 40,
    width: 200,
    backgroundColor: "#ecf0f1",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  textHeader: {
    marginTop: 12,
    marginLeft: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
  },

  boxTime: {
    backgroundColor: "#ecf0f1",
    height: 56,
    marginTop: 12,
    marginRight: 12,
    borderRadius: 8,
  },

  salonSelectContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 56,
    backgroundColor: "#ecf0f1",
    borderRadius: 8,
    marginRight: 12,
  },

  inputContainer: {
    height: 56,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    padding: 12,
    marginRight: 12,
    borderRadius: 8,
  },
  inputText: {
    fontSize: 14,
    color: "#898B9A",
  },

  bottomContainer: {
    flex: 1,
    // backgroundColor: "green",
    // marginTop: 180,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
export default InfoBook;
