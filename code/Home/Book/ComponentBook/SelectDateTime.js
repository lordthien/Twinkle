import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";

import ChooseBarberStylist from "./ChooseBarberStylist";
import Time from "./Time";
import DateTime from "./DateTime";
import MonthYear from "./MonthYear";

export default function SelectDateTime({
  route,
  storeId,
  staff,
  setStaff,
  selectTime,
  setSelectTime,
}) {
  const [current, setCurrent] = useState(new Date());
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(current.getFullYear());
  const [dates, setDates] = useState([]);
  const [selectDate, setSelectDate] = useState(
    new Date(current.getFullYear(), current.getMonth() + 1, current.getDate())
  );
  const [times, setTimes] = useState([]);
  useEffect(() => {
    setMonth(current.getMonth() + 1);
    return;
  }, []);
  useEffect(() => {
    let maxDate;
    if ([1, 3, 5, 7, 8, 10, 12].includes(month)) maxDate = 31;
    else if ([4, 6, 9, 11].includes(month)) maxDate = 30;
    else if (year % 4 == 0 && year % 100 !== 0) maxDate = 29;
    else maxDate = 28;
    setDates([]);
    let list = [];
    if (month == current.getMonth() + 1) {
      for (let i = current.getDate(); i < maxDate + 1; i++) {
        list.push(new Date(year, month - 1, i));
      }
    } else {
      for (let i = 1; i < maxDate + 1; i++) {
        list.push(new Date(year, month - 1, i));
      }
    }
    setDates(list);
    setSelectDate(list[0]);
    return;
  }, [month]);
  useEffect(() => {
    let list = [];
    if (
      selectDate.getDate() == current.getDate() &&
      selectDate.getMonth() == current.getMonth() &&
      Math.floor((current.getTime() - selectDate.getTime()) / 3600000) >= 8
    ) {
      for (
        let i =
          Math.floor((current.getTime() - selectDate.getTime()) / 3600000) + 1;
        i < 21;
        i++
      ) {
        list.push(i);
      }
    } else {
      for (let i = 8; i < 21; i++) {
        list.push(i);
      }
    }
    // console.log(list)
    setTimes(list);
    return;
  }, [selectDate]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.textHeader1}>
          <Text style={styles.text}>Select Date & Time</Text>
        </View>
        {/* -------------------------------------------------------------- */}
        <View style={styles.boxDateTime}>
          <MonthYear
            month={month}
            year={year}
            setMonth={setMonth}
            setYear={setYear}
          />
          <DateTime
            dates={dates}
            selectDate={selectDate}
            setSelectDate={setSelectDate}
          />
        </View>
        {/* -------------------------------------------------------------- */}
        <View style={styles.boxTime}>
          <Time
            times={times}
            selectDate={selectDate}
            selectTime={selectTime}
            setSelectTime={setSelectTime}
          />
        </View>
        {/* -------------------------------------------------------------- */}
        <View style={styles.textHeader1}>
          <Text style={styles.text}>Choose Barber Stylist</Text>
        </View>
        {/* -------------------------------------------------------------- */}
        <View style={{ flex: 1 }}>
          <ChooseBarberStylist
            staff={staff}
            setStaff={setStaff}
            storeId={storeId}
          />
        </View>
        {/* -------------------------------------------------------------- */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  textHeader1: {
    padding: 16,
  },
  textHeader2: {
    marginLeft: 12,
    marginTop: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  boxDateTime: {
    height: 130,
    width: 350,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
    borderRadius: 8,
  },
  dateTime: {
    width: 340,
  },
  dateContainer: {
    height: 70,
    width: 40,
    backgroundColor: "orange",
    borderRadius: 12,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  boxTime: {
    marginTop: 12,
    height: 64,
    width: 350,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
    borderRadius: 8,
  },
  boxTime2: {
    flexDirection: "row",
    marginTop: 12,
    height: 64,
    width: 350,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 12,
    borderRadius: 8,
  },
  timeContainer: {
    marginTop: 12,
    height: 40,
    width: 90,
    backgroundColor: "orange",
    borderRadius: 12,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  blockContainer: {
    flex: 1,
    marginLeft: 12,
    marginRight: 12,
  },
});
