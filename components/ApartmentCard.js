import React, { useState } from "react";

import { StyleSheet, Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function ApartmentCard(props) {
  return (
    <View style={[styles.contenair2, { paddingHorizontal: 20 }]}>
      <View style={{ flex: 1 }}>
        <Text numberOfLines={1} style={styles.title}>
          {props.title}
        </Text>
        <View style={styles.starContainer}>
          <AntDesign name="star" size={32} color="#FFB401" />
          <AntDesign name="star" size={32} color="#FFB401" />
          <AntDesign name="star" size={32} color="#FFB401" />
        </View>
      </View>
      <Image
        source={{
          uri: props.user.account.photos[0]
        }}
        style={styles.avatar}
        resizeMode="contain"
      />
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
