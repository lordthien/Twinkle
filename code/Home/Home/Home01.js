import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Alert,
  Platform,
} from "react-native";

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

import Constants from "expo-constants";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

function Home01({ navigation }) {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const [token, setToken] = useState("");
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  useEffect(() => {
    async function getToken() {
      let result = await SecureStore.getItemAsync("token");
      setToken(result);
    }
    getToken();
  })
  useEffect(() => {
    const url = "http://149.28.137.174:5000/app/nearestBook";
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(async (result) => {
        let noti = await SecureStore.getItemAsync("noti");
        console.log(result)
        let time = (new Date(result.book.schedule)).getTime() - new Date().getTime()
        if(!noti.includes(result.book._id)) {
          await schedulePushNotification(
            `Lịch hẹn ${result.book.services[0].name} tại ${result.book.store.name}`,
            `Còn 30 phút là tới lịch hẹn ${result.book.services[0].name}. Vào lúc ${new Date(result.book.schedule)
              .toTimeString("VN")
              .slice(0, 5)} - ngày ${new Date(
                result.book.schedule
            ).toLocaleDateString("VN")}`, time
          );
          if (noti == "" || noti == null)
            await SecureStore.setItemAsync("noti", result.book._id);
          else if(!noti.includes(result.book._id)) await SecureStore.setItemAsync("noti", noti + result.book._id);
        }
      });
  }, [notification, token]);

  async function schedulePushNotification(title, body, time) {
    let second = Math.floor(( time - 60 * 30 * 1000 ) / 1000); 
    await Notifications.scheduleNotificationAsync({
      content: {
        title: title,
        body: body,
        data: { data: "goes here" },
      },
      trigger: { seconds: second },
    });
  }
  
  async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert("Must use physical device for Push Notifications");
    }
  
    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
  
    return token;
  }


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
