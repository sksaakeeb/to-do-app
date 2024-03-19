import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

const settings = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      // Clear user authentication state, tokens, or any other relevant data.
      await AsyncStorage.clear();
      router.push("login");
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  return (
    <View style={{ backgroundColor: "white", padding: 10, flex: 1 }}>
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
            Settings
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

      {/* Account Setting Button. */}
      <View style={{ marginTop: 25 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "",
            alignItems: "center",
          }}
        >
          <Pressable>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 30 }}
            >
              <View>
                <Feather
                  style={{ marginLeft: 15 }}
                  name="user"
                  size={24}
                  color="black"
                />
              </View>
              <View>
                <Text style={{ fontSize: 18, fontWeight: "400" }}>
                  Your account
                </Text>
                <Text style={{ color: "gray" }}>
                  See information about your account.
                </Text>
              </View>
            </View>
          </Pressable>
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

      {/* Privacy & Security. */}
      <View style={{ marginTop: 25 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "",
            alignItems: "center",
          }}
        >
          <Pressable>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 30 }}
            >
              <View>
                <AntDesign
                  style={{ marginLeft: 15 }}
                  name="lock1"
                  size={24}
                  color="black"
                />
              </View>
              <View>
                <Text style={{ fontSize: 18, fontWeight: "400" }}>
                  Privacy and Security
                </Text>
                <Text style={{ color: "gray" }}>
                  Manage your account's security.
                </Text>
              </View>
            </View>
          </Pressable>
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

      {/* Theme */}
      <View style={{ marginTop: 25 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "",
            alignItems: "center",
          }}
        >
          <Pressable>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 30 }}
            >
              <View>
                <Feather
                  style={{ marginLeft: 15 }}
                  name="moon"
                  size={24}
                  color="black"
                />
              </View>
              <View>
                <Text style={{ fontSize: 18, fontWeight: "400" }}>Theme</Text>
                <Text style={{ color: "gray" }}>Choose theme</Text>
              </View>
            </View>
          </Pressable>
        </View>
      </View>

      {/* Log out. */}
      <View
        style={{
          marginTop: "auto",
          padding: 10,
          backgroundColor: "#86B6F6",
          borderRadius: 8,
        }}
      >
        <Pressable onPress={handleLogout}>
          <Text style={{ textAlign: "center" }}>LOG OUT</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default settings;

const styles = StyleSheet.create({});
