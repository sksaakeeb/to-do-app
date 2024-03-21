import { StyleSheet, Text, Pressable, View } from "react-native";
import React from "react";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
export default function YourAccount() {
  const router = useRouter();
  return (
    <View style={{ backgroundColor: "white", padding: 10, flex: 1 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons
          onPress={() => {
            router.back();
          }}
          name="arrow-back-outline"
          size={24}
          color="black"
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: "500", marginLeft: 22 }}>
            Your account
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

      {/* User Information. */}
      <View style={{ marginTop: 25, marginLeft: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "",
            alignItems: "center",
          }}
        >
          <Pressable
            onPress={() => {
              router.push("/");
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 30 }}
            >
              <View>
                <Text style={{ fontSize: 18, fontWeight: "400" }}>Name</Text>
                <Text style={{ color: "gray" }}>Sk Sakib</Text>
              </View>
            </View>
          </Pressable>
        </View>
      </View>

      <View style={{ marginTop: 25, marginLeft: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "",
            alignItems: "center",
          }}
        >
          <Pressable
            onPress={() => {
              router.push("/");
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 30 }}
            >
              <View>
                <Text style={{ fontSize: 18, fontWeight: "400" }}>Phone</Text>
                <Text style={{ color: "gray" }}>+91 8597391212</Text>
              </View>
            </View>
          </Pressable>
        </View>
      </View>

      <View style={{ marginTop: 25, marginLeft: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "",
            alignItems: "center",
          }}
        >
          <Pressable
            onPress={() => {
              router.push("/");
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 30 }}
            >
              <View>
                <Text style={{ fontSize: 18, fontWeight: "400" }}>
                  Email address
                </Text>
                <Text style={{ color: "gray" }}>sksakib066@gmail.com</Text>
              </View>
            </View>
          </Pressable>
        </View>
      </View>

      <View style={{ marginTop: 25, marginLeft: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "",
            alignItems: "center",
          }}
        >
          <Pressable
            onPress={() => {
              router.push("/");
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 30 }}
            >
              <View>
                <Text style={{ fontSize: 15, fontWeight: "400", color: "red" }}>
                  Log out
                </Text>
              </View>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
