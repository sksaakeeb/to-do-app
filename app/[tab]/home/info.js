import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Ionicons,
  Feather,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import LottieView from "lottie-react-native";

const info = () => {
  const params = useLocalSearchParams();

  return (
    <View style={{ backgroundColor: "white", padding: 10, flex: 1 }}>
      {/* Heading. */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons name="arrow-back-outline" size={24} color="black" />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: "500", marginLeft: 22 }}>
            Details
          </Text>
        </View>
      </View>

      {/* Border. */}
      <View
        style={{
          borderBottomColor: "#EEEDEB",
          borderBottomWidth: 1,
          marginTop: 15,
          width: "100%",
        }}
      />

      {/* To-do title. */}
      <Text
        style={{
          fontSize: 28,
          fontWeight: "400",
          padding: 10,
          backgroundColor: "#B4D4FF",
          marginTop: 15,
          borderRadius: 8,
        }}
      >
        {params?.title}
      </Text>

      {/* To-do category. */}
      <View style={{ marginTop: 10 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "500",
            padding: 8,
            backgroundColor: "#86B6F6",
            borderRadius: 8,
          }}
        >
          Category: {params?.category}
        </Text>
      </View>

      <View style={{ marginTop: 30 }} />

      {/* To-do details. */}
      <Pressable
        style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
      >
        <Feather name="edit" size={24} color="black" />
        <Text style={{ fontSize: 20, fontWeight: "500" }}>Edit task</Text>
      </Pressable>

      <View
        style={{
          padding: 8,
          backgroundColor: "#EEF5FF",
          borderRadius: 8,
          marginTop: 15,
        }}
      >
        {/* To-do due date. */}
        <View style={{ marginTop: 15 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <AntDesign name="calendar" size={22} color="black" />
              <Text style={{ fontSize: 15, fontWeight: "300" }}>Due date</Text>
            </View>
            <Pressable
              style={{
                backgroundColor: "#86B6F6",
                padding: 10,
                borderRadius: 7,
              }}
            >
              <Text>{params?.dueDate}</Text>
            </Pressable>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: "#B6BBC4",
            borderBottomWidth: 1,
            marginTop: 10,
            width: "100%",
          }}
        />

        {/* Time & Reminder. */}
        <View style={{ marginTop: 15 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <AntDesign name="clockcircleo" size={20} color="black" />
              <Text style={{ fontSize: 15, fontWeight: "300" }}>
                Time & Reminder
              </Text>
            </View>

            <Pressable
              style={{
                backgroundColor: "#86B6F6",
                padding: 10,
                borderRadius: 7,
              }}
            >
              <Text>No</Text>
            </Pressable>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: "#B6BBC4",
            borderBottomWidth: 1,
            marginTop: 10,
            width: "100%",
          }}
        />

        {/* Repeat task. */}
        <View style={{ marginTop: 15 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <MaterialIcons name="loop" size={22} color="black" />
              <Text style={{ fontSize: 15, fontWeight: "300" }}>
                Repeat task
              </Text>
            </View>

            <Pressable
              style={{
                backgroundColor: "#86B6F6",
                padding: 10,
                borderRadius: 7,
              }}
            >
              <Text>No</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <LottieView
        style={{
          height: 250,
          width: 300,
          justifyContent: "center",
          marginLeft: 20,
        }}
        source={require("../animations/info-animation.json")}
        autoPlay
        loop
      />
    </View>
  );
};

export default info;

const styles = StyleSheet.create({});
