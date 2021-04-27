import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import SignUpScreen from "./screens/SignUpScreen";
import Mahdi from "./screens/Mahdi";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


export default function App() {
  return (
    <View style={styles.container}>
      {/* <SignUpScreen/> */}
      <Mahdi/>
      <Stack.Navigator>
      <Stack.Screen name="Sign-in" component={SignUpScreen} />
      <Stack.Screen name="Mahdi"/>
    </Stack.Navigator>
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
