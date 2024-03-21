import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { router, useRouter } from "expo-router";

export default function PrivacyAndSecurity() {
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
            Privacy & Security
          </Text>
        </View>
      </View>

      <View
        style={{
          borderBottomColor: "#EEEDEB",
          borderBottomWidth: 1,
          marginTop: 15,
          width: "100%",
        }}
      />

      <View style={{ marginTop: 25, marginLeft: 10 }}>
        <Text>Current password</Text>
      </View>
      <View
        style={{
          alignItems: "center",
          marginLeft: 10,
          borderColor: "#185ABC",
          borderWidth: 1,
          paddingVertical: 1,
          borderRadius: 5,
          marginTop: 5,
        }}
      >
        <TextInput
          style={{
            color: "black",
            marginVertical: 8,
            width: 320,
            fontSize: 14,
          }}
          placeholder="Your current password"
        />
      </View>

      <View style={{ marginTop: 25, marginLeft: 10 }}>
        <Text>New password</Text>
      </View>
      <View
        style={{
          alignItems: "center",
          marginLeft: 10,
          borderColor: "#185ABC",
          borderWidth: 1,
          paddingVertical: 1,
          borderRadius: 5,
          marginTop: 5,
        }}
      >
        <TextInput
          style={{
            color: "black",
            marginVertical: 8,
            width: 320,
            fontSize: 14,
          }}
          placeholder="At least 6 characters"
        />
      </View>

      <View style={{ marginTop: 25, marginLeft: 10 }}>
        <Text>Confirm password</Text>
      </View>
      <View
        style={{
          alignItems: "center",
          marginLeft: 10,
          borderColor: "#185ABC",
          borderWidth: 1,
          paddingVertical: 1,
          borderRadius: 5,
          marginTop: 5,
        }}
      >
        <TextInput
          style={{
            color: "black",
            marginVertical: 8,
            width: 320,
            fontSize: 14,
          }}
          placeholder="At least 6 characters"
        />
      </View>

      <Pressable>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 15,
            backgroundColor: "#0073cf",
            padding: 10,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: "white", fontWeight: "500" }}>
            Update password
          </Text>
        </View>
      </Pressable>

      <Pressable>
        <View>
          <Text
            style={{ textAlign: "center", marginTop: 15, color: "#185ABC" }}
          >
            Forgot your password?
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
