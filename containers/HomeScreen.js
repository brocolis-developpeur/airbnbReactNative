import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Button, Text, View } from "react-native";
import Apartment from "../components/Apartment";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Welcome home!</Text>
      <Apartment />
      <Apartment />

      <Button
        title="Go to Profile"
        onPress={() => {
          navigation.navigate("Profile", { userId: 123 });
        }}
      />
    </View>
  );
}
