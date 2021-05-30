import React from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";

import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import * as SecureStore from "expo-secure-store";

import TextHeader from "../Home/Component/TextHeader";
import Header from "../Home/Component/Header";
import Block from "../Home/Component/Block";
import AdsImage from "../Home/Component/AdsImage";
import BestSalon from "../Home/Component/BestSalon";

function Home01({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Header
          onPress={() => {
            navigation.openDrawer();
          }}
          navigation={navigation} 
        />
      </View>
      <View style={styles.adsContainer}>
        <AdsImage />
      </View>
      <View style={styles.headerText}>
        <TextHeader text="Top Services" textViewAll="View All" />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.blockContainer}
      >
        <Block
          icon={<Ionicons name="cut-outline" size={40} color="black" />}
          text="Hair Cut"
        />
        <Block
          icon={<Icon name="hair-dryer-outline" size={40} color="black" />}
          text="Blow-dry"
        />
        <Block
          icon={<SimpleLineIcons name="user-female" size={40} color="black" />}
          text="Styling"
        />
        <Block
          icon={<FontAwesome5 name="broom" size={24} color="black" />}
          text="Coloring"
        />
        <Block
          icon={<Ionicons name="grid" size={40} color="black" />}
          text="More"
        />
      </ScrollView>
      <View style={styles.headerText}>
        <TextHeader text="Best Salon" textViewAll="View All" />
      </View>
      <View style={styles.squareContainer}>
        <BestSalon navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    backgroundColor: "#bdc3c720",
  },
  headerContainer: {
    flex: 0.7,
  },

  adsContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 8,
  },

  headerText: {
    flex: 0.3,
    flexDirection: "row",
  },

  blockContainer: {
    flex: 1,
    flexDirection: "row",
    marginRight: 12,
  },
  squareContainer: {
    flex: 2,
  },
  bottomContainer: {
    flex: 0.7,
  },
});
export default Home01;
