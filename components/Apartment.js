import React from "react";
import { useNavigation } from "@react-navigation/core";

import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Button
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Apartment(props) {
  const navigation = useNavigation();

  return (
    // <View style={{ margin: 20 }}>
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
      <View
        style={[
          styles.contenair2,
          { paddingHorizontal: props.RoomScreen ? 20 : 0 }
        ]}
      >
        <View style={{ flex: 1 }}>
          <Text>{props.title}</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
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
