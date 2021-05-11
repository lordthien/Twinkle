import React from "react";
import { Text, StyleSheet, View, ScrollView, Image } from "react-native";

function AdsImage() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Image
          style={styles.adsImage}
          source={require("../../../../assets/icon/ads1.png")}
        />
        <Image
          style={styles.adsImage}
          source={require("../../../../assets/icon/ads1.png")}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 4,
    marginRight: 12,
  },
  adsImage: {
    height: 208,
    width: 300,
    borderRadius: 20,
    marginRight: 14,
  },
});
export default AdsImage;
