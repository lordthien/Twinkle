import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

import ListTopSalon from "./ComponentTopSalon/ListTopSalon";

export default function FavouriteScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.text}>Top Salon</Text>
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
});
