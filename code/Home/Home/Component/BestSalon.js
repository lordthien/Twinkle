import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, FlatList, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { AntDesign } from "@expo/vector-icons";

const url = "http://149.28.137.174:5000/app/allStores";

function BestSalon({navigation}) {
  const [data, setData] = useState({ stores: [] });
  const [selectedItem, setSelectedItem] = useState(0);
  useEffect(() => {
    let getData = async () => {
      let result = await axios.get(url)
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
      result.stores=result.stores.map((e) => {
        return { id: e._id, name: e.name, avatar: e.avatar, address: e.address, star: e.averagePoint };
      });
      setData(result);
    };
    getData();
    return;
  }, []);
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
          navigation.navigate("HomeBarber", {id: item.id});
        }}
      >
        <Image
          source={{ uri: `http://149.28.137.174:5000/${item.avatar}` }}
          style={styles.imageSalon}
        />
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
            {item.address}
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
        data={data.stores}
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
    width: 290,
    borderRadius: 12,
    backgroundColor: "white",
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
    color: "#95a5a6",
    fontWeight: "bold",
    fontSize: 18,
  },

  textStreet: {
    color: "black",
    fontWeight: "400",
  },
  textStreetSelected: {
    color: "#95a5a6",
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
