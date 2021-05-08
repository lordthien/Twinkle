import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import Block from "../Component/Block";

import BookNow from "../ComponentBarber/BookNow";
import dataCutHair from "./dataServices/dataCutHair";

export default function SelectDateTime({}) {
  const [selectedItem, setSelectedItem] = React.useState(0);

  const renderItem = ({ item, index }) => {
    return (
      <SafeAreaView style={styles.midContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.listContainer}>
            <TouchableOpacity style={styles.icon}>
              <MaterialCommunityIcons
                style={selectedItem === index ? "white" : "black"}
                name="checkbox-marked"
                size={24}
              />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.textTitle}>{item.title}</Text>
                <Text>{item.des}</Text>
              </View>
              <View style={styles.textPrice}>
                <Text style={styles.textTitle}>{item.price}</Text>
                <Text>{item.time}</Text>
              </View>
            </View>
          </View>
          {/* -------------------------------------------------------------- */}
        </ScrollView>
      </SafeAreaView>
    );
  };

  return (
    <View>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.iconContainer}>
          <AntDesign
            name="left"
            size={24}
            color="black"
            onPress={() => {
              navigation.navigate("HomeBarber");
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.textHeader1}>
          <Text style={styles.text}>Select Services</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.blockContainer}
        >
          <Block
            icon={<Ionicons name="cut-outline" size={30} color="black" />}
            text="Hair Cut"
          />
          <Block
            icon={
              <MaterialCommunityIcons
                name="hair-dryer-outline"
                size={30}
                color="black"
              />
            }
            text="Blow-dry"
          />
          <Block
            icon={
              <SimpleLineIcons name="user-female" size={30} color="black" />
            }
            text="Styling"
          />
          <Block
            icon={<FontAwesome5 name="broom" size={24} color="black" />}
            text="Coloring"
          />
          <Block
            icon={<Entypo name="grid" size={40} color="black" />}
            text="More"
          />
        </ScrollView>
        <View style={{ alignItems: "center" }}>
          <Text>-------------------------------------------------------</Text>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={dataCutHair}
          renderItem={renderItem}
          keyExtractor={(item, index) => {
            return "cuthair-" + item.id;
          }}
        />
        <View style={styles.bottomContainer}>
          <BookNow
            onPress={() => {
              navigation.navigate("Home01");
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  midContainer: {
    width: 350,
  },
  textHeader1: {
    padding: 16,
  },

  text: {
    fontSize: 16,
    fontWeight: "bold",
  },

  icon: {
    justifyContent: "center",
    marginRight: 12,
  },

  titleContainer: {
    flexDirection: "column",
  },
  textTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },

  textPrice: {
    flexDirection: "column",
    marginLeft: 18,
    justifyContent: "center",
    alignItems: "center",
  },

  listContainer: {
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 12,
  },

  headerContainer: {
    height: 43,
    width: 255,
  },

  iconContainer: {
    height: 40,
    width: 40,
    backgroundColor: "#ecf0f1",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginLeft: 12,
  },
  bottomContainer: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
