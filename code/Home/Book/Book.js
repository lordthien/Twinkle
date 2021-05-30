import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, SafeAreaView } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import BookNow from "../Barber/ComponentBarber/BookNow";
import SelectDateTime from "../Book/ComponentBook/SelectDateTime";

function Book({ navigation, route }) {
  const [staff, setStaff] = useState("");
  const [selectTime, setSelectTime] = useState();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.iconContainer}>
          <AntDesign
            name="left"
            size={24}
            color="black"
            onPress={() => {
              navigation.navigate("HomeBarber");
            }}
          />
        </TouchableOpacity>
      </View>
      {/* -------------------------------------------------------------- */}
      <View style={styles.timeContainer}>
        <SelectDateTime
          staff={staff}
          setStaff={setStaff}
          selectTime={selectTime}
          setSelectTime={setSelectTime}
          storeId={route.params.storeId}
        />
      </View>
      {/* -------------------------------------------------------------- */}
      <View style={styles.bottomContainer}>
        <BookNow
          title="Book Now"
          onPress={() => {
            navigation.navigate("MaterialTopTabNavigator", {
              staff: staff,
              selectTime: selectTime,
              storeId: route.params.storeId,
            });
          }}
        />
      </View>
      {/* -------------------------------------------------------------- */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: 43,
    width: 255,
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
  timeContainer: {
    flex: 1,
  },
  bottomContainer: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Book;
