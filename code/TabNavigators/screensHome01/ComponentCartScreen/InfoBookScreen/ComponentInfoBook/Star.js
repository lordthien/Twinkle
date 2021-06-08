import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";

function Star({}) {
  // const [data, setData] = useState({ });
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <View style={styles.container}>
      {starComponent.map((item, index) => {
        return (
          <TouchableOpacity
            key={i}
            style={selectedItem === index ? styles.selectedStar : styles.star}
            onPress={() => {
              setSelectedItem({ selectedItem });
            }}
          >
            <AntDesign
              style={selectedItem === index ? "white" : "black"}
              name="staro"
              size={18}
            />
            <Text
              style={
                selectedItem === index
                  ? styles.selectedTextStar
                  : styles.textStar
              }
            >
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  star: {
    flexDirection: "row",
    alignItems: "center",
    height: 35,
    width: 70,
    //backgroundColor: "#FF6C44",
    padding: 6,
    borderRadius: 12,
    marginLeft: 12,
  },
  selectedStar: {
    flexDirection: "row",
    alignItems: "center",
    height: 35,
    width: 70,
    backgroundColor: "#FF6C44",
    padding: 6,
    borderRadius: 12,
    marginLeft: 12,
  },
  textStar: {
    fontSize: 16,
    marginLeft: 8,
    color: "black",
  },
  selectedTextStar: {
    fontSize: 16,
    marginLeft: 8,
    color: "white",
  },
});

export default Star;
