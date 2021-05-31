import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function DateTime({ dates, selectDate, setSelectDate }) {
  const [selectedItem, setSelectedItem] = useState();

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.timeContainer}>
        <TouchableOpacity
          style={
            selectedItem === index
              ? styles.buttonSalonSelected
              : styles.buttonSalon
          }
          onPress={() => {
            setSelectedItem(index);
            setSelectDate(item);
            // console.log(item)
          }}
        >
          <Text
            style={
              selectedItem === index
                ? styles.textSalonSelected
                : styles.textSalon
            }
          >
            {typeof item === typeof new Date()
              ? item.toDateString().slice(0, 3)
              : ""}
          </Text>
          <Text
            style={
              selectedItem === index
                ? styles.textSalonSelected
                : styles.textSalon
            }
          >
            {typeof item === typeof new Date() ? item.getDate() : ""}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dates}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          return "datetime-" + item.id;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 12,
  },
  timeContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSalonSelected: {
    height: 70,
    width: 42,
    borderRadius: 12,
    backgroundColor: "#FF6C44",
    marginRight: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSalon: {
    height: 70,
    width: 42,
    borderRadius: 12,
    backgroundColor: "#ecf0f1",
    marginRight: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  textSalon: {
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 4,
  },
  textSalonSelected: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 4,
  },
});
