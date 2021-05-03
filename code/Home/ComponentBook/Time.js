import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import dataTime from "./dataTime";

export default function Time() {
  const [selectedItem, setSelectedItem] = React.useState();

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
            //onPress(onPress);
            setSelectedItem(index);
          }}
        >
          <Text
            style={
              selectedItem === index
                ? styles.textSalonSelected
                : styles.textSalon
            }
          >
            {item.name}
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
        data={dataTime}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          return "time-" + item.id;
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
    height: 40,
    width: 90,
    borderRadius: 12,
    backgroundColor: "#FF6C44",
    marginRight: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSalon: {
    height: 40,
    width: 90,
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
});
