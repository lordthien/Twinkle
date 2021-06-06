import React from "react";
import { Text, StyleSheet, View, FlatList, Image } from "react-native";

import dataGalerry from "./Data/dataGalerry";

function Gallery({ photos }) {
  renderItem = ({ item, index }) => {
    // console.log(item.url)
    return (
      <View key={index} style={styles.container}>
        <Image
          source={{ uri: `http://149.28.137.174:5000${item.url}` }}
          style={styles.imageContainer}
        />
      </View>
    );
  };

  return (
    <View style={{ padding: 12 }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={photos}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          return item.id;
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
