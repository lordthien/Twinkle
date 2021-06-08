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
import Star from "./ComponentInfoBook/Star";
import Star2 from "./ComponentInfoBook/Star2";
import ImagePickerExample from "./ComponentInfoBook/ImagePickerExample";
import BookNow from "../../../../Home/Barber/ComponentBarber/BookNow";

import { AntDesign } from "@expo/vector-icons";

const sizes = [
  {
    name: "1",
  },
  {
    name: "2",
  },
  {
    name: "3",
  },
  {
    name: "4",
  },
  {
    name: "5",
  },
];

function ReviewScreen({ navigation, route }) {
// function ReviewScreen({}) {
  // console.log(route.params.id);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [star, setStar] = useState("");
  const [token, setToken] = useState("");
  let onPressSave = async () => {
    let awaitToken = await SecureStore.getItemAsync("token");
    setToken(awaitToken);
    let data = {
      title: title,
      content: content,
      ratingPoint: star,
    };
    let result = await axios
      .post(
        `http://149.28.137.174:5000/app/review?id=${route.params.id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((result) => result.data);
    console.log(result);
    if (result.status == "Success") {
      Alert.alert("Thông bán", "Bạn đã review dich vụ thành công");
      navigation.navigate("CartCompleted");
    }
    return;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <View style={styles.headerContainer}>
          <Text style={styles.textBoxBold}>Review Book</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.textHeader}>
          <TextHeaderInfo title="1. TITLE" />
          <View style={styles.boxContainer}>
            <TextInput
              placeholder={"Title"}
              onChangeText={(text) => setTitle(text)}
              style={styles.text}
            />
          </View>
        </View>

        <View style={styles.textHeader}>
          <TextHeaderInfo title="2. CONTENT" />
          <View style={styles.contentContainer}>
            <TextInput
              placeholder={"Content"}
              onChangeText={(text) => setContent(text)}
              style={styles.text}
            />
          </View>
        </View>

        <View style={styles.textHeader}>
          <TextHeaderInfo title="3. STAR" />
          <View style={styles.starContainer}>
            {/* <TouchableOpacity
              // style={styles.star}
              style={
                (index ? styles.selectedStar : styles.star,
                checked ? styles.star : styles.selectedStar)
              }
              onPress={() => {
                setState({ index: i });
                let x = !checked;
                setState({ checked: x });
              }}
            >
              <AntDesign name="staro" size={24} color="black" />
              <AntDesign name="staro" size={24} color="black" />
              <AntDesign name="staro" size={24} color="black" />
              <AntDesign name="staro" size={24} color="black" />
              <AntDesign name="staro" size={24} color="black" />
            </TouchableOpacity> */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {/* <Star onPress={() => setStar(4)} starComponent={["4.0"]} /> */}
              <Star2 sizes={sizes} onPress={() => setStar(sizes.name)} />
            </ScrollView>
          </View>
        </View>

        <View style={styles.textHeader}>
          <TextHeaderInfo title="4. IMAGE" />
          <View style={styles.boxContainer}>
            <ImagePickerExample />
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <BookNow title="REVIEW" onPress={onPressSave} />
      </View>
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
    backgroundColor: "#FF6C44",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  textBoxBold: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  textHeader: {
    marginTop: 1,
    marginLeft: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 12,
  },

  boxContainer: {
    minHeight: 56,
    backgroundColor: "#bdc3c750",
    borderRadius: 8,
    marginRight: 12,
    justifyContent: "center",
  },
  contentContainer: {
    minHeight: 100,
    backgroundColor: "#bdc3c750",
    borderRadius: 8,
    marginRight: 12,
    padding: 12,
  },
  starContainer: {
    minHeight: 56,
    backgroundColor: "#ecf0f1",
    borderRadius: 8,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  bottomContainer: {
    height: 60,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 12,
  },
});
export default ReviewScreen;
