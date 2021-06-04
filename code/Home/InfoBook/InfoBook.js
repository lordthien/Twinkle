import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";

import axios from "axios";
import * as SecureStore from "expo-secure-store";
import TextHeaderInfo from "./ComponentInfoBook/TextHeaderInfo";
import BookNow from "../Barber/ComponentBarber/BookNow";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

function InfoBook({ navigation, route }) {
  const [staff, setStaff] = useState({ name: "" });
  const [store, setStore] = useState({ name: "" });
  const [note, setNote] = useState("");
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    phoneNumber: "",
    avatar: "",
  });
  const [token, setToken] = useState("");
  useEffect(() => {
    let getData = async () => {
      let url = `http://149.28.137.174:5000/app/storeById?id=${route.params.store}`;
      let result = await axios
        .get(url)
        .then((res) => res.data)
        .catch((err) => {
          throw err;
        });
      setStore(result.store);
      url = `http://149.28.137.174:5000/app/staffById?id=${route.params.staff}`;
      result = await axios
        .get(url)
        .then((res) => res.data)
        .catch((err) => {
          throw err;
        });
      setStaff(result.staff);
    };
    getData();
    async function getInformation() {
      try {
        let data = JSON.parse(await SecureStore.getItemAsync("customer"));
        setUser(data);
        data = await SecureStore.getItemAsync("token");
        setToken(data);
      } catch (error) {
        throw error;
      }
    }
    getInformation();
    return;
  }, []);

  let pressBook = async () => {
    let totalPrice = 0;
    route.params.services.forEach((e) => {
      totalPrice = totalPrice + e.price;
    });
    let totalDuration = 0;
    route.params.services.forEach((e) => {
      totalDuration = totalDuration + e.duration;
    });
    let data = {
      schedule: route.params.time,
      note: note,
      totalPrice: totalPrice,
      totalDuration: totalDuration,
      cost: totalPrice,
      services: route.params.services.map((e) => e._id), //JSON.stringify(route.params.services.map((e) => e._id)),
      staff: route.params.staff,
      store: route.params.store,
      customer: user.id,
      discount: "",
      status: "BOOKED",
    };
    let result = await axios.post(
      `http://149.28.137.174:5000/app/booking`, 
      data, {
      headers: {
        'Authorization': `Bearer ${token}` 
      }
    })
    console.log(result);
    Alert.alert("Notification", "You have booked a schedule");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <TouchableOpacity style={styles.iconContainer}>
          <AntDesign
            name="left"
            size={24}
            color="black"
            onPress={() => {
              navigation.navigate("MaterialTopTab_Book");
            }}
          />
        </TouchableOpacity>
        <View style={styles.headerContainer}>
          <Text style={styles.textBold}>Thông Tin Đặt Lịch</Text>
        </View>
      </View>

      <ScrollView>
        <View style={styles.textHeader}>
          <TextHeaderInfo title="1. SALON SELECTED" />

          <View style={styles.salonSelectContainer}>
            <Ionicons
              style={{ marginLeft: 12, marginRight: 12 }}
              name="home-outline"
              size={24}
              color="black"
            />
            <Text style={styles.text}>{store.name}</Text>
          </View>
        </View>

        <View style={styles.textHeader}>
          <TextHeaderInfo title="2. SERVICED" />
          <View style={styles.boxService}>
            {route.params.services.map((e) => (
              <View style={styles.boxServices}>
                <Text style={styles.text}>
                  {e.name} - {e.price / 1000}K
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.textHeader}>
          <TextHeaderInfo title="3. STYLIST" />
          <View style={styles.salonSelectContainer}>
            <MaterialCommunityIcons
              style={{ marginLeft: 12, marginRight: 12 }}
              name="human-greeting"
              size={24}
              color="black"
            />
            <Text style={styles.text}>{staff.name}</Text>
          </View>
        </View>

        <View style={styles.textHeader}>
          <TextHeaderInfo title="4. DATE & TIMED" />
          <View style={styles.salonSelectContainer}>
            <FontAwesome
              style={{ marginLeft: 12, marginRight: 12 }}
              name="calendar-times-o"
              size={24}
              color="black"
            />
            <Text style={styles.text}>
              {new Date(route.params.time).toTimeString("VN").slice(0, 5)}
              {` - `}
              {new Date(route.params.time).toLocaleDateString("VN")}{" "}
            </Text>
          </View>
        </View>

        <View style={styles.textHeader}>
          <TextHeaderInfo title="5. NOTES" />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              placeholder={"VD: Anh đi 3 người/ Anh đi cùng con"}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <BookNow
          title="COMPLETE"
          onPress={() => {
            pressBook();
            navigation.navigate("Home01");
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconContainer: {
    height: 40,
    width: 40,
    backgroundColor: "#bdc3c787",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginLeft: 12,
    marginBottom: 4,
  },
  headerContainer: {
    // marginTop: 12,
    marginBottom: 8,
    marginLeft: 44,
    height: 40,
    width: 200,
    backgroundColor: "#ecf0f1",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  textHeader: {
    marginTop: 1,
    marginLeft: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
  textBold: {
    fontSize: 17,
    fontWeight: "600",
  },
  boxService: {
    backgroundColor: "#ecf0f1",
    height: 95,
    marginTop: 12,
    marginRight: 12,
    borderRadius: 8,
  },
  boxTime: {
    backgroundColor: "#ecf0f1",
    height: 56,
    marginTop: 12,
    marginRight: 12,
    borderRadius: 8,
  },
  salonSelectContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 56,
    backgroundColor: "#ecf0f1",
    borderRadius: 8,
    marginRight: 12,
  },
  inputContainer: {
    height: 56,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    padding: 12,
    marginRight: 12,
    borderRadius: 8,
  },
  inputText: {
    fontSize: 14,
    color: "#898B9A",
  },
  bottomContainer: {
    height: 60,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  boxServices: {
    marginLeft: 12,
    marginTop: 10,
  },
});
export default InfoBook;
