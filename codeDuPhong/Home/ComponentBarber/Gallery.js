import React from "react";
import { Text, StyleSheet, View, FlatList, Image } from "react-native";

import dataGalerry from "../Data/dataGalerry";

function Gallery({}) {
  renderItem = ({ item, index }) => {
    return (
      <View style={styles.container}>
        <Image source={item.imageUrl} style={styles.imageContainer} />
      </View>
    );
  };

  return (
    <View style={{ padding: 12 }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dataGalerry}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          return "gallery-" + item.id;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: 140,
    width: 290,
    borderRadius: 12,
    marginRight: 12,
  },
});
export default Gallery;
