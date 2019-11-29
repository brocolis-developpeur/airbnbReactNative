import React from "react";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, View } from "react-native";
import ApartmentMini from "./ApartmentMini";

export default function ListMap({ data }) {
  const navigation = useNavigation();

  const markers = data.rooms.map((room, index) => {
    return {
      id: index,
      latitude: room.loc[1],
      longitude: room.loc[0],
      user: room.user.account.username,
      title: room.title,
      roomId: room._id,
      photo: room.photos[0]
    };
  });
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: data.city.loc[1],
          longitude: data.city.loc[0],
          latitudeDelta: 0.11,
          longitudeDelta: 0.11
        }}
      >
        {markers.map(marker => {
          return (
            <Marker
              key={marker.id}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude
              }}
              onPress={() =>
                navigation.navigate("Room", { roomId: marker.roomId })
              }
            >
              <ApartmentMini {...marker} />
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
}
