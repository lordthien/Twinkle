import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

export default function CartScreen({ navigation }) {
  const [token, setToken] = useState("");
  const [books, setBooks] = useState([
    { services: [], _id: "", store: { name: "", price: "" } },
  ]);
  useEffect(() => {
    async function getInformation() {
      try {
        let data = await SecureStore.getItemAsync("token");
        setToken(data);
      } catch (error) {
        throw error;
      }
    }
    getInformation();
    return;
  });
  useEffect(() => {
    let getData = async () => {
      //cancelBooks => canceled || unpaidBooks => booked || paidBooks => completed
      // let url = `http://149.28.137.174:5000/app/cancelBooks`;
      // let url = `http://149.28.137.174:5000/app/paidBooks`;
      let url = `http://149.28.137.174:5000/app/unpaidBooks`;
      let result = await axios
        .get(url, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => res.data)
        .catch((err) => {
          throw err;
        });
      setBooks(result.books);
    };
    getData();
    return;
  });
  let cancelBook = (id) => {
    let link = `http://149.28.137.174:5000/app/cancel?id=${id}`;
    axios
      .post(link, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      // fetch(link, {
      //   method: "POST", // or 'PUT'
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // })
      .then((res) => res.json())
      .then((res) => {
        if (res.book.status == "CANCEL")
          Alert.alert("Thông báo", "Đã hủy lịch hẹn!");
      })
      .catch((err) => {
        throw err;
      });
  };
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.headerContainer2}>
          <Text style={styles.textBoxBold}>Booked</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.headerContainer3}
          onPress={() => navigation.navigate("CartCancel")}
        >
          <Text style={styles.textBoxBold}>Canceled</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.headerContainer3}
          onPress={() => navigation.navigate("CartCompleted")}
        >
          <Text style={styles.textBoxBold}>Completed</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {books.map((book, index) => (
          // console.log(book),
          // console.log("---------"),
          <View key={index} style={styles.boxService}>
            <TouchableOpacity
              style={{ width: 172 }}
              // onPress={() => navigation.navigate("InfoBookScreen")}
            >
              <View style={{ marginBottom: 9 }}>
                <Text style={styles.textBold}>{book.store.name}</Text>
              </View>
              <View style={{ marginBottom: 8 }}>
                <Text style={styles.text}>
                  {new Date(book.schedule).toTimeString("VN").slice(0, 5)}
                  {` - `}
                  {new Date(book.schedule).toLocaleDateString("VN")}
                </Text>
              </View>

              {book.services.map((e) => (
                <View style={{ marginBottom: 6 }}>
                  <Text style={styles.text}>- {e.name}</Text>
                </View>
              ))}
              
            </TouchableOpacity>
            <View style={styles.textPrice}>
              {/* <Text style={styles.text}>{book.store.price}</Text> */}
              <Text style={styles.textBold}>{book.cost / 1000}K</Text>

              <TouchableOpacity
                style={styles.boxCancel}
                onPress={() => cancelBook(book._id)}
              >
                <Text style={styles.textBoxBold}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer3: {
    marginTop: 12,
    marginBottom: 8,
    height: 40,
    width: 112,
    backgroundColor: "#FF6C4450",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginLeft: 4,
    marginRight: 4,
  },
  headerContainer2: {
    marginTop: 12,
    marginBottom: 8,
    height: 40,
    width: 112,
    backgroundColor: "#FF6C44",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginLeft: 4,
    marginRight: 4,
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
  },
  textBold: {
    fontSize: 17,
    fontWeight: "600",
  },
  textBoxBold: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  textPrice: {
    justifyContent: "center",
    alignItems: "center",
  },
  boxService: {
    backgroundColor: "#bdc3c7",
    // height: 107,
    width: 345,
    marginTop: 12,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
  },
  boxCancel: {
    width: 80,
    height: 45,
    marginTop: 19,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6C44",
    borderRadius: 24,
  },
});
