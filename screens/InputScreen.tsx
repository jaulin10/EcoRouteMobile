import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  ActivityIndicator,
  Alert,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteType, RootStackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";

import rawRoutesData from "../assets/routes.json";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Input">;

export default function InputScreen() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation<NavigationProp>();

  const findRoutes = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simule un appel API
      const routes: RouteType[] = rawRoutesData as RouteType[];
      navigation.navigate("Results", { routes });
    } catch (error) {
      Alert.alert("Erreur", "Unable to retrieve routes.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>From</Text>
      <TextInput
        style={styles.input}
        value={from}
        onChangeText={setFrom}
        placeholder="Ex: 23 Gerrard Street North"
      />
      <Text style={styles.label}>To</Text>
      <TextInput
        style={styles.input}
        value={to}
        onChangeText={setTo}
        placeholder="Ex: 90 progress Avenue"
      />
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Button
          title="Find Routes"
          onPress={findRoutes}
          disabled={!from || !to}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  label: { marginBottom: 5, fontWeight: "bold" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
});
