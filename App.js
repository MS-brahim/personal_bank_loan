import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CreditCalcul from "./screens/CreditCalcul";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your test!</Text>
      <CreditCalcul />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
