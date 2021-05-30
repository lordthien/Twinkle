import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";

import TextHeaderInfo from "./ComponentInfoBook/TextHeaderInfo";
import BookNow from "../Barber/ComponentBarber/BookNow";
import BoxServiceSelect from "./ComponentInfoBook/BoxServiceSelect";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

function InfoBook({ navigation, route }) {
  console.log(route);
  console.log("--------------");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.text}>Thông Tin Đặt Lịch</Text>
      </View>
      <ScrollView>
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
          <TextHeaderInfo title="3. STYLIST" />
          <View style={styles.salonSelectContainer}>
            <MaterialCommunityIcons
              style={{ marginLeft: 12, marginRight: 12 }}
              name="human-greeting"
              size={24}
              color="black"
            />
            <Text style={styles.text}>Loi Cho</Text>
          </View>
        </View>

        <View style={styles.textHeader}>
          <TextHeaderInfo title="4. DATE & TIMED" />
          <View style={styles.salonSelectContainer}>
            <FontAwesome
              style={{ marginLeft: 12, marginRight: 12 }}
              name="calendar-times-o"
              size={24}
              color="black"
            />
            <Text style={styles.text}>4 - June - 2021 / 14:00</Text>
          </View>
        </View>

        <View style={styles.textHeader}>
          <TextHeaderInfo title="5. NOTES" />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              placeholder={"VD: Anh đi 3 người/ Anh đi cùng con"}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <BookNow
          title="COMPLETE"
          onPress={() => {
            navigation.navigate("Home01");
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginTop: 12,
    marginBottom: 8,
    marginLeft: 87,
    height: 40,
    width: 200,
    backgroundColor: "#ecf0f1",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  textHeader: {
    marginTop: 1,
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
    height: 60,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
export default InfoBook;
