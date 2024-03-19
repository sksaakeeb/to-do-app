import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import { LineChart } from "react-native-chart-kit";
import axios from "axios";
import LottieView from "lottie-react-native";

import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";

const index = () => {
  const [completedTasks, setCompletedTasks] = useState(0);
  const [pendingTasks, setPendingTasks] = useState(0);

  const fetchTaskData = async () => {
    try {
      const response = await axios.get(
        "http://192.168.41.247:8000/todos/count"
      );

      const { totalCompletedTodos, totalPendingTodos } = response.data;
      setCompletedTasks(totalCompletedTodos);
      setPendingTasks(totalPendingTodos);
    } catch (error) {
      console.log("Error.", error);
    }
  };

  useEffect(() => {
    fetchTaskData();
  }, []);

  console.log("Completed", completedTasks);
  console.log("Pending", pendingTasks);

  return (
    <View style={{ padding: 10, flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginTop: 10,
        }}
      >
        <Image
          style={{ width: 60, height: 60, borderRadius: 30 }}
          source={{
            uri: "https://avatars.githubusercontent.com/u/109467015?v=4",
          }}
        />
        <View>
          <Text style={{ fontSize: 20, fontWeight: "600" }}>Sk Sakib</Text>
          <Text style={{ fontSize: 15, color: "gray", marginTop: 4 }}>
            Select Categories
          </Text>
        </View>

        <View style={{ marginLeft: "auto" }}>
          <Feather
            onPress={() => {
              router.push("/settings");
            }}
            name="settings"
            size={24}
            color="black"
          />
        </View>
      </View>

      <View style={{ marginVertical: 12 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 15 }}>
          Tasks Overview
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 6,
            marginVertical: 8,
          }}
        >
          <View
            style={{
              backgroundColor: "#89CFF0",
              padding: 10,
              borderRadius: 8,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{ textAlign: "center", fontSize: 16, fontWeight: "bold" }}
            >
              {completedTasks}
            </Text>
            <Text style={{ marginTop: 4 }}>Completed Tasks</Text>
          </View>

          <View
            style={{
              backgroundColor: "#89CFF0",
              padding: 10,
              borderRadius: 8,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{ textAlign: "center", fontSize: 16, fontWeight: "bold" }}
            >
              {pendingTasks}
            </Text>
            <Text style={{ marginTop: 4 }}>Pending Tasks</Text>
          </View>
        </View>
      </View>

      <LineChart
        data={{
          labels: ["Pending Tasks", "Completed Tasks"],
          datasets: [
            {
              data: [pendingTasks, completedTasks],
            },
          ],
        }}
        width={Dimensions.get("window").width - 20} // from react-native
        height={220}
        // yAxisLabel="$"
        // yAxisSuffix="k"
        yAxisInterval={2} // Optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // Optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        bezier
        style={{
          borderRadius: 16,
        }}
      />

      <View
        style={{
          backgroundColor: "#89CFF0",
          padding: 10,
          marginTop: 15,
          borderRadius: 8,
        }}
      >
        <Text style={{ textAlign: "center", fontSize: 15, fontWeight: "500" }}>
          Tasks for next 7 days
        </Text>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <LottieView
          style={{ height: 150, width: 200 }}
          source={require("../animations/profile-animation.json")}
          autoPlay
          loop
        />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
