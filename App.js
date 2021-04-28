import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SignUpScreen from "./screens/SignUpScreen";
import CreditCalcul from "./screens/CreditCalcul";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Calcul"
          component={CreditCalcul}
          options={{
            title: "Crédit personnel",
            headerTintColor: "#ed3b45",
            headerStyle: {
              backgroundColor: "white",
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{
            title: "Inscription",
            headerTintColor: "#ed3b45",
            headerStyle: {
              backgroundColor: "white",
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
