import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Calendar } from "react-native-calendars";
import moment from "moment";
import axios from "axios";

import { FontAwesome, Feather, AntDesign } from "@expo/vector-icons";

const index = () => {
  const [selectedDate, setSelectedDate] = useState(today);
  const today = moment().format("YYYY-MM-DD");
  const [todos, setTodos] = useState([]);

  const fetchCompletedTodos = async () => {
    try {
      const response = await axios.get(
        `http://192.168.41.247:8000/todos/completed/${selectedDate}`
      );

      const completedTodos = response.data.completedTodos || [];
      setTodos(completedTodos);
    } catch (error) {
      console.log("Error.", error);
    }
  };

  useEffect(() => {
    fetchCompletedTodos();
  }, [selectedDate]);
  console.log(todos);
  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: "#7CB9E8" },
        }}
      />

      <View style={{ marginTop: 20 }} />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
          marginVertical: 10,
          marginHorizontal: 10,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          Completed Tasks
        </Text>
        <AntDesign name="downcircleo" size={18} color="black" />
      </View>

      {/* Mapping completed todos. */}
      <ScrollView>
        {todos?.map((item, index) => (
          <Pressable
            style={{
              backgroundColor: "#E0E0E0",
              padding: 10,
              borderRadius: 7,
              marginVertical: 6,
              marginHorizontal: 10,
            }}
            key={index}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <FontAwesome name="check-circle" size={24} color="gray" />
              <Text
                style={{
                  flex: 1,
                  textDecorationLine: "line-through",
                  color: "gray",
                }}
              >
                {item?.title}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
