import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import dataBarber from "./dataBarber/dataBarber";

export default function ChooseBarber() {
  const [selectedItem, setSelectedItem] = React.useState();

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={
          selectedItem === index
            ? styles.buttonSalonSelected
            : styles.buttonSalon
        }
        onPress={() => {
          setSelectedItem(index);
        }}
      >
        <Image source={item.imageUrl} style={styles.imageSalon} />

        <View style={styles.textContainer}>
          <Text
            style={
              selectedItem === index
                ? styles.textSalonSelected
                : styles.textSalon
            }
          >
            {item.name}
          </Text>
          <Text
            style={
              selectedItem === index ? styles.textSalonSelected : styles.textSalon
            }
          >
            {item.star}{" "}
            {
              <AntDesign
                style={selectedItem === index ? "white" : "black"}
                name="staro"
                size={16}
              />
            }
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dataBarber}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          return "barber-" + item.id;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 12,
    marginRight: 12,
  },
  buttonSalonSelected: {
    height: 200,
    width: 150,
    borderRadius: 12,
    backgroundColor: "#bdc3c7",
    marginRight: 16,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  buttonSalon: {
    height: 200,
    width: 150,
    borderRadius: 12,
    backgroundColor: "#ecf0f1",
    marginRight: 16,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  imageSalon: {
    height: 140,
    width: 150,
    borderRadius: 12,
  },

  textSalon: {
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 6,
    marginRight: 4,
  },
  textSalonSelected: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 6,
    marginRight: 4,
  },

  textContainer: {
    flex: 1,
    width: 150,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
