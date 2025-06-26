import React from "react";
import { View, StyleSheet, Button } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "MapPreview">;

export default function MapPreviewScreen({ navigation }: Props) {
  const start = { latitude: 43.6532, longitude: -79.3832 }; // Toronto (fake point A)
  const end = { latitude: 43.6517, longitude: -79.347 }; // Toronto (fake point B)

  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: (start.latitude + end.latitude) / 2,
          longitude: (start.longitude + end.longitude) / 2,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker coordinate={start} title="From" />
        <Marker coordinate={end} title="To" />
        <Polyline
          coordinates={[start, end]}
          strokeColor="#007AFF"
          strokeWidth={4}
        />
      </MapView>
      <View style={styles.buttonContainer}>
        <Button title="Back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  buttonContainer: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    elevation: 3,
  },
});
