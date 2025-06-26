import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { RouteType, RootStackParamList } from "../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "Results">;

export default function ResultsScreen({ route, navigation }: Props) {
  const { routes } = route.params;
  const sortedRoutes = routes.sort((a, b) => a.score - b.score).slice(0, 3);

  const getModeLabel = (mode: RouteType["mode"]) => {
    switch (mode) {
      case "driving":
        return "🚗 Car";
      case "bicycling":
        return "🚲 Bicycle";
      case "transit":
        return "🚌 Bus";
      case "walking":
        return "🚶 Walk";
      default:
        return mode;
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={sortedRoutes}
        keyExtractor={(item) => item.mode}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("MapPreview")}>
            <View style={styles.card}>
              <Text style={styles.mode}>{getModeLabel(item.mode)}</Text>
              <Text>Distance: {item.distance_km} km</Text>
              <Text>Time: {item.time_min} min</Text>
              <Text>CO₂: {item.co2_g} g</Text>
              <Text style={styles.score}>Score: {item.score}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: {
    padding: 15,
    backgroundColor: "#e0f7fa",
    marginBottom: 15,
    borderRadius: 10,
  },
  mode: { fontSize: 18, fontWeight: "bold" },
  score: { marginTop: 5, fontWeight: "bold", color: "#00796b" },
});
