import React from "react";
import { Text, StyleSheet, View, ScrollView, Image } from "react-native";

function AdsImage() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Image
        style={styles.adsImage}
        source={require("../../../assets/icon/ads1.png")}
      />
      <Image
        style={styles.adsImage}
        source={require("../../../assets/icon/ads1.png")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  adsImage: {
    height: 218,
    width: 300,
    borderRadius: 20,
    marginRight: 14,
  },
});
export default AdsImage;
