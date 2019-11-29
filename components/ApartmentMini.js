import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";

import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function ApartmentMini(props) {
  const [alltext, setAlltext] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.contenair}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => {
          alert("you clicked");
          navigation.navigate("Room", { roomId: props.roomId });
        }}
      >
        <View>
          <Image
            source={{
              uri: props.photo
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </TouchableOpacity>

      <Text style={styles.title} numberOfLines={1}>
        {props.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenair: {
    justifyContent: "center"
  },

  touchable: {},

  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    // borderStyle: "solid",
    borderWidth: 2,
    position: "absolute",
    top: -70,
    left: 12
  },
  title: {
    backgroundColor: "black",
    color: "white",
    borderStyle: "solid",
    width: 100,
    borderWidth: 1,
    fontSize: 10,
    textAlign: "center",
    fontWeight: "400",
    borderRadius: 10,
    padding: 5
  }
});
