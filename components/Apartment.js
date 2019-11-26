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
    <View style={styles.apartmentcontainer}>
      <Button
        title="GO to Appart"
        onPress={() => {
          navigation.navigate("Room", { roomId: props._id });
        }}
      />
      <View>
        <Image
          source={{
            uri: props.photos[0]
          }}
          style={{ height: 250, width: "100%" }}
          resizeMode="contain"
        />
        <Text style={styles.price}>{props.price}</Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <Text>{props.title}</Text>
          <View style={styles.starContainer}>
            <AntDesign name="star" size={32} color="yellow" />
            <AntDesign name="star" size={32} color="yellow" />
            <AntDesign name="star" size={32} color="yellow" />
          </View>
        </View>
        <Image
          source={{
            uri: props.user.account.photos[0]
          }}
          style={{ height: 100, width: 100 }}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  price: {
    backgroundColor: "brown",
    color: "yellow",
    width: 50,
    position: "absolute",
    left: 200,
    top: 200
  },
  apartmentcontainer: {
    backgroundColor: "grey",
    margin: 20
  },

  starContainer: {
    flexDirection: "row"
  }
});
