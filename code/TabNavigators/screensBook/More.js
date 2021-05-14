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

import { MaterialCommunityIcons } from "@expo/vector-icons";
import BookNow from "../../Home/Barber/ComponentBarber/BookNow";
import dataMore from "../dataServices/dataMore";

export default function FavouriteScreen({ navigation }) {
  const [selectedItem, setSelectedItem] = React.useState(false);

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={
          selectedItem === index ? styles.midContainer : styles.midContainer
        }
        onPress={() => {
          setSelectedItem(index);
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.listContainer}>
            <TouchableOpacity style={styles.icon}>
              <MaterialCommunityIcons
                name={
                  selectedItem === index
                    ? "checkbox-marked"
                    : "checkbox-blank-outline"
                }
                size={24}
                color="black"
                onPress={() => {
                  let x = !selectedItem;
                  setSelectedItem({ selectedItem: x });
                }}
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
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.textHeader1}>
        <Text style={styles.text}>Select Services</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={dataMore}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          return "cuthair-" + item.id;
        }}
      />
      <View style={styles.bottomContainer}>
        <BookNow
          title="Select"
          onPress={() => {
            navigation.navigate("InfoBook");
          }}
        />
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
    marginTop: 12,
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
    flex: 0.36,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
