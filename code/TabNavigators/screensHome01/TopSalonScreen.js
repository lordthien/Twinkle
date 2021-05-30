import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import ListTopSalon from "./ComponentTopSalon/ListTopSalon";

export default function TopSalonScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.text}>Top Salon</Text>
      </View>
      <View style={styles.find}>
        <View style={styles.iconInputContainer}>
          <Ionicons
            name="search-outline"
            size={24}
            color="black"
            onPress={() => {
              navigation.navigate("TopSalonScreen");
            }}
          />
        </View>
        <TextInput style={styles.textInputContainer} placeholder="Search" />
      </View>
      <View style={{ flex: 1 }}>
        <ListTopSalon
          onPress={() => {
            navigation.navigate("HomeBarber");
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
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
  find: {
    flexDirection: "row",
    height: 40,
    borderRadius: 12,
    marginLeft: 12,
    marginRight: 12,
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
