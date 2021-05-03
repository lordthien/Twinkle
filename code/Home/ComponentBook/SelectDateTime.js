import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import ChooseBarberStylist from "./ChooseBarberStylist";
import Time from "./Time";
import DateTime from "./DateTime";
import MonthYear from "./MonthYear";
import Block from "../Component/Block";

export default function SelectDateTime({}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.textHeader}>
          <Text style={styles.text}>Select Date & Time</Text>
        </View>
        <View style={styles.boxDateTime}>
          <MonthYear />
          <DateTime />
        </View>
        <View style={styles.boxTime}>
          <Time />
        </View>
        <View style={styles.textHeader}>
          <Text style={styles.text}>Services</Text>
        </View>
        {/* -------------------------------------------------------------- */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.blockContainer}
        >
          <Block
            icon={<Ionicons name="cut-outline" size={30} color="black" />}
            text="Hair Cut"
          />
          <Block
            icon={<MaterialCommunityIcons name="hair-dryer-outline" size={30} color="black" />}
            text="Blow-dry"
          />
          <Block
            icon={
              <SimpleLineIcons name="user-female" size={30} color="black" />
            }
            text="Styling"
          />
          <Block
            icon={<FontAwesome5 name="broom" size={24} color="black" />}
            text="Coloring"
          />
          <Block
            icon={<Entypo name="grid" size={40} color="black" />}
            text="More"
          />
        </ScrollView>
        {/* -------------------------------------------------------------- */}
        <View style={styles.textHeader}>
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
  textHeader: {
    padding: 16,
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
