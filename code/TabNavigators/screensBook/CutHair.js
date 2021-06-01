import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import BookNow from "../../Home/Barber/ComponentBarber/BookNow";
// import dataCutHair from "../dataServices/dataCutHair";
import axios from "axios";

export default function CutHair({
  navigation,
  data,
  selectedServices,
  setSelectedServices,
  staff,
  time,
  store,
}) {
  let dataCutHair = data.services;
  let renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={styles.midContainer}
        onPress={() => {
          let list = selectedServices;
          if (list.filter((e) => e._id == item._id).length < 1) {
            data.services.forEach((ser) => {
              list = list.filter((e) => e._id !== ser._id);
            });
            list.push(item);
            setSelectedServices(list);
            console.log(list);
          } else {
            if (typeof selectedServices === typeof [])
              setSelectedServices(
                selectedServices.filter((e) => e._id !== item._id)
              );
          }
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.listContainer}>
            <TouchableOpacity style={styles.icon}>
              {selectedServices.filter((e) => e._id == item._id).length > 0 ? (
                <MaterialCommunityIcons
                  name="checkbox-marked"
                  size={24}
                  color="black"
                />
              ) : (
                <MaterialCommunityIcons
                  name="checkbox-blank-outline"
                  size={24}
                  color="black"
                />
              )}
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: 310,
              }}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.textTitle}>{item.name}</Text>
                <Text style={{ maxWidth: 235 }}>{item.description}</Text>
              </View>
              <View style={styles.textPrice}>
                <Text style={styles.textTitle}>{item.price / 1000}K</Text>
                <Text>{item.duration} phút</Text>
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
        data={dataCutHair}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          return "cuthair-" + item.id;
        }}
      />
      <View style={styles.bottomContainer}>
        <BookNow
          title="BOOK"
          onPress={() => {
            navigation.navigate("InfoBook", {
              services: selectedServices,
              time: time,
              staff: staff,
              store: store,
            });
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
    // backgroundColor: "green",
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
    flex: 0.5,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
