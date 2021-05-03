import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
  ScrollView,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import Name from "./ComponentBarber/Name";
import Block from "./Component/Block";
import TextHeader from "./Component/TextHeader";
import Gallery from "./ComponentBarber/Gallery";
import BookNow from "./ComponentBarber/BookNow";

function HomeBarber({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.iconContainer}>
          <AntDesign
            name="left"
            size={24}
            color="black"
            // onPress={navigation.navigate("Home01")}
            onPress={() => {
              navigation.navigate("Home01");
            }}
          />
        </TouchableOpacity>
      </View>
      {/* -------------------------------------------------------------- */}
      <View style={styles.boxContainer}>
        <ScrollView>
          <View>
            <Image
              style={styles.iconHeader}
              source={require("../../assets/images/barber1.jpeg")}
            />
            <View style={styles.nameBarberContainer}>
              <Name textName="Barber Shop Star" />
            </View>
          </View>
          {/* -------------------------------------------------------------- */}
          <View style={styles.mapContainer}>
            <Feather name="map-pin" size={24} color="#bdc3c7" />
            <Text style={styles.text}>102 Nguyen Van Linh</Text>
          </View>
          {/* -------------------------------------------------------------- */}
          <View style={styles.timeContainer}>
            <Ionicons name="time-outline" size={24} color="#bdc3c7" />
            <Text style={styles.text}>10.00 AM - 22.00 PM</Text>
          </View>
          {/* -------------------------------------------------------------- */}
          <View style={styles.headerText}>
            <TextHeader text="Services" />
          </View>
          {/* -------------------------------------------------------------- */}
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
              icon={<Icon name="hair-dryer-outline" size={30} color="black" />}
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
          {/* -------------------------------------------------------------- */}
          <View style={styles.headerText}>
            <TextHeader text="Gallery" />
          </View>
          {/* -------------------------------------------------------------- */}
          <View style={styles.squareContainer}>
            <Gallery />
          </View>
        </ScrollView>
      </View>

      {/* -------------------------------------------------------------- */}
      <View style={styles.bottomContainer}>
        <BookNow
          onPress={() => {
            navigation.navigate("Book");
          }}
        />
      </View>
      {/* -------------------------------------------------------------- */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerContainer: {
    height: 43,
    width: 255,
    // justifyContent: "flex-start",
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

  iconHeader: {
    height: 200,
    width: 360,
    marginLeft: 8,
    borderRadius: 20,
    marginTop: 12,
  },
  nameBarberContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    alignItems: "center",
  },

  mapContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: 12,
  },

  timeContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: 12,
    marginTop: 2,
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 4,
    color: "#bdc3c7",
  },

  headerText: {
    flex: 1,
    flexDirection: "row",
    marginTop: 4,
    marginBottom: 4,
  },
  blockContainer: {
    flex: 1,
    marginLeft: 12,
    marginRight: 12,
  },
  squareContainer: {
    flex: 2,
  },
  bottomContainer: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  boxContainer: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
export default HomeBarber;
