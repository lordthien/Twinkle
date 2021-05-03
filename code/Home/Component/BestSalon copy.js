import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import dataBestSalon from "../Data/dataBestSalon";

import { AntDesign } from "@expo/vector-icons";

class BestSalon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: 0,
    };
  }

  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={
          this.state.selectedItem === index
            ? styles.buttonSalonSelected
            : styles.buttonSalon
        }
        onPress={() => {
          this.setState({ selectedItem: index });
        }}
      >
        <Image source={item.imageUrl} style={styles.imageSalon} />
        <View style={styles.textContainer}>
          <Text
            style={
              this.state.selectedItem === index
                ? styles.textSalonSelected
                : styles.textSalon
            }
          >
            {item.name}
          </Text>
          <Text
            style={
              this.state.selectedItem === index
                ? styles.textSalonSelected
                : styles.textSalon
            }
          >
            {item.star}{" "}
            {
              <AntDesign
                style={this.state.selectedItem === index ? "white" : "black"}
                name="staro"
                size={18}
              />
            }
          </Text>
        </View>
        <View style={styles.streetContainer}>
          <Text
            style={
              this.state.selectedItem === index
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

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={dataBestSalon}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => {
            return "bestsalon-" + item.id;
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 12,
  },

  buttonSalonSelected: {
    height: 200,
    width: 290,
    borderRadius: 12,
    backgroundColor: "#bdc3c7",
    marginRight: 16,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  buttonSalon: {
    height: 200,
    width: 290,
    borderRadius: 12,
    backgroundColor: "#ecf0f1",
    marginRight: 16,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  imageSalon: {
    height: 140,
    width: 290,
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
    width: 260,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  streetContainer: {
    flex: 1,
    width: 260,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});

export default BestSalon;
