import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import ChooseBarberStylist from "./ChooseBarberStylist";
import Time from "./Time";
import DateTime from "./DateTime";
import MonthYear from "./MonthYear";
import BoxServiceSelect from "./BoxServiceSelect";
import MaterialTopTabNavigator from "../../TabNavigators/MaterialTopTabNavigator";

export default function SelectDateTime({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.textHeader1}>
          <Text style={styles.text}>Select Date & Time</Text>
        </View>
        <View style={styles.boxDateTime}>
          <MonthYear />
          <DateTime />
        </View>
        <View style={styles.boxTime}>
          <Time />
        </View>

        {/* <BoxServiceSelect /> */}

        <View style={styles.textHeader1}>
          <Text style={styles.text}>Choose Barber Stylist</Text>
        </View>
        <View style={{ flex: 1 }}>
          <ChooseBarberStylist />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  textHeader1: {
    padding: 16,
  },
  textHeader2: {
    marginLeft: 12,
    marginTop: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  boxDateTime: {
    height: 130,
    width: 350,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
    borderRadius: 8,
  },
  dateTime: {
    width: 340,
  },
  dateContainer: {
    height: 70,
    width: 40,
    backgroundColor: "orange",
    borderRadius: 12,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  boxTime: {
    marginTop: 12,
    height: 64,
    width: 350,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
    borderRadius: 8,
  },
  boxTime2: {
    flexDirection: "row",
    marginTop: 12,
    height: 64,
    width: 350,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 12,
    borderRadius: 8,
  },
  timeContainer: {
    marginTop: 12,
    height: 40,
    width: 90,
    backgroundColor: "orange",
    borderRadius: 12,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  blockContainer: {
    flex: 1,
    marginLeft: 12,
    marginRight: 12,
  },
});
