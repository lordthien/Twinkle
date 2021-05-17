import React from "react";
import { Text, StyleSheet, View, FlatList, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import dataBestSalon from "../../../Home/Home/Component/Data/dataBestSalon";

import { AntDesign } from "@expo/vector-icons";

function BestSalon({ onPress }) {
  const [selectedItem, setSelectedItem] = React.useState(0);

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={
          selectedItem === index
            ? styles.buttonSalonSelected
            : styles.buttonSalon
        }
        onPress={() => {
          onPress(onPress);
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
              selectedItem === index
                ? styles.textSalonSelected
                : styles.textSalon
            }
          >
            {item.star}{" "}
            {
              <AntDesign
                style={selectedItem === index ? "white" : "black"}
                name="staro"
                size={18}
              />
            }
          </Text>
        </View>
        <View style={styles.streetContainer}>
          <Text
            style={
              selectedItem === index
                ? styles.textStreetSelected
                : styles.textStreet
            }
          >
            {item.street}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={dataBestSalon}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          return "bestsalon-" + item.id;
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
    width: 350,
    borderRadius: 12,
    backgroundColor: "#bdc3c7",
    marginTop: 12,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  buttonSalon: {
    height: 200,
    width: 350,
    borderRadius: 12,
    backgroundColor: "#ecf0f1",
    marginTop: 12,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  imageSalon: {
    height: 140,
    width: 350,
    borderRadius: 12,
  },

  textSalon: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
  },
  textSalonSelected: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },

  textStreet: {
    color: "black",
    fontWeight: "400",
  },
  textStreetSelected: {
    color: "white",
    fontWeight: "400",
  },

  textContainer: {
    flex: 1,
    width: 310,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  streetContainer: {
    flex: 1,
    width: 310,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});

export default BestSalon;
