import React from "react";
import ApartmentCard from "./ApartmentCard";

import { StyleSheet, Text, View, Image } from "react-native";

export default function Apartment(props) {
  return (
    <View>
      <View>
        <Image
          source={{
            uri: props.photos[0]
          }}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.price}>{props.price + "€"}</Text>
      </View>
      <ApartmentCard {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20
  },
  price: {
    backgroundColor: "black",
    color: "white",
    fontSize: 30,
    justifyContent: "center",
    textAlign: "center",
    padding: 10,
    position: "absolute",
    left: 10,
    top: 180
  },

  starContainer: {
    flexDirection: "row"
  },
  image: { height: 250, width: "100%" },
  avatar: { height: 100, width: 100, borderRadius: 50 },

  contenair2: {
    flexDirection: "row",
    paddingVertical: 20
  }
});
