import React from "react";
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

export default function Apartment() {
  return (
    <View style={styles.apartmentcontainer}>
      <View>
        <Image
          source={{
            uri:
              "https://a2.muscache.com/im/pictures/78258559/75143e16_original.jpg"
          }}
          style={{ height: 250, width: "100%", margin: 0 }}
          resizeMode="contain"
        />
        <Text style={styles.price}>10 EUROS</Text>
      </View>
      <Text>Logement Entier, Gambetta</Text>
      <View style={styles.containerRow}>
        {/* <View> */}
        <AntDesign name="star" size={32} color="yellow" />
        <AntDesign name="star" size={32} color="yellow" />
        <AntDesign name="star" size={32} color="yellow" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "grey"
  },
  price: {
    backgroundColor: "brown",
    color: "yellow",
    width: 50,
    position: "absolute",
    left: 200,
    top: 200
  },
  apartmentcontainer: {
    backgroundColor: "black",
    margin: 20
  }
});
