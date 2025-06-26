import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import InputScreen from "./screens/InputScreen";
import ResultsScreen from "./screens/ResultsScreen";
import MapPreviewScreen from "./screens/MapPreviewScreen";

export type RouteType = {
  mode: "driving" | "bicycling" | "transit" | "walking";
  distance_km: number;
  time_min: number;
  co2_g: number;
  score: number;
};

export type RootStackParamList = {
  Input: undefined;
  Results: { routes: RouteType[] };
  MapPreview: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Input" component={InputScreen} />
        <Stack.Screen name="Results" component={ResultsScreen} />
        <Stack.Screen name="MapPreview" component={MapPreviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
