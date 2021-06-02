import React, {useState, useEffect} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

export default function CartScreen({ navigation }) {
  const [token, setToken] = useState("");
  const [books, setBooks] = useState([{ store: {name: ""}}])
  useEffect(() => {
    async function getInformation() {
      try {
        let data = await SecureStore.getItemAsync("token");
        setToken(data);
      } catch (error) {
        throw error;
      }
    }
    getInformation()
    return;
  });
  useEffect(() => {
    let getData = async () => {
      let url = `http://149.28.137.174:5000/app/allBooks`;
      let result = await axios
        .get(url, {
          headers: {
            'Authorization': `Bearer ${token}` 
          }
        })
        .then((res) => res.data)
        .catch((err) => {
          throw err;
        });
      setBooks(result.books);
    }
    getData();
    return;
  }, [token]);
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <View style={styles.headerContainer}>
        <Text style={styles.text}>Thông Tin Đặt Lịch</Text>
      </View>
      <ScrollView>
        {
          books.map((book) => <View style={styles.boxService}>
            <Text style={styles.text}>{book.store.name}</Text>
          </View>)
        }
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginTop: 12,
    marginBottom: 8,
    height: 40,
    width: 200,
    backgroundColor: "#ecf0f1",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
  boxService: {
    backgroundColor: "#ecf0f1",
    height: 95,
    width: 345,
    marginTop: 12,
    borderRadius: 8,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
