import React from "react";
import MapView from "react-native-maps";
import { Text, View } from "react-native";

export default function TheMap(props) {
  const markers = [
    {
      id: 1,
      latitude: 48.8564449,
      longitude: 2.4002913,
      title: "Le Reacteur",
      description: "La formation des champion·ne·s !"
    }
  ];
  return (
    <View style={{ padding: 20 }}>
      <MapView
        // La MapView doit obligatoirement avoir des dimensions
        style={{ height: 300, width: "100%" }}
        initialRegion={{
          latitude: props.loc[1],
          longitude: props.loc[0],
          latitudeDelta: 0.035,
          longitudeDelta: 0.035
        }}
      >
        {markers.map(marker => {
          return (
            <MapView.Marker
              key={marker.id}
              coordinate={{
                latitude: props.loc[1],
                longitude: props.loc[0]
              }}
              title={marker.title}
              description={marker.description}
            />
          );
        })}
      </MapView>
    </View>
  );
}
