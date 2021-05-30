import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function MonthYear({month, year, setMonth, setYear}) {
  let nextMonth = () => {
    if(month==12) {
      setMonth(1)
      setYear(year+1)
    }
    else setMonth(month+1)
  }
  let prevMonth = () => {
    if((new Date()).getMonth()+1<month || year>(new Date()).getFullYear()) {
      if(month==1) {
        setMonth(12)
        setYear(year-1)
      }
      else setMonth(month-1)
    }
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={prevMonth}>
        <Ionicons name="chevron-back" size={18} color="black" />
      </TouchableOpacity>
      <Text style={styles.text}>{month} / {year}</Text>
      <TouchableOpacity onPress={nextMonth}>
        <Ionicons name="chevron-forward" size={18} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginBottom: 8,
    flexDirection: "row",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 4,
    marginLeft: 4,
  },
});
