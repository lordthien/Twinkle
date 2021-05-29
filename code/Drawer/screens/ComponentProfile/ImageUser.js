import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

export default function ImageUser({avatar}) {
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          style={{
            marginTop: 12,
            borderRadius: 18,
            width: 150,
            height: 150,
            alignItems: "center",
            justifyContent: "center",
          }}
          source={{
            uri: `http://149.28.137.174:5000/${avatar}`,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
