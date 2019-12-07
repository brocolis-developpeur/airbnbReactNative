import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/core";
import TheMap from "../components/TheMap";
import Description from "../components/Description";
import ThePhotos from "../components/ThePhotos";
import ApartmentCard from "../components/ApartmentCard";

import {
  ActivityIndicator,
  Text,
  View,
  ScrollView,
  SafeAreaView
} from "react-native";
import Apartment from "../components/Apartment";
import axios from "axios";

const RoomScreen = () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  const [data, setData] = useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // "https://airbnb-api.now.sh/api/room/" + params.roomId
          "https://airbnb-api.herokuapp.com/api/room/" + params.roomId
        );
        setData(response.data);
      } catch (e) {
        alert(e.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {!data ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" color="red" />
        </View>
      ) : (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
          <ScrollView>
            <ThePhotos {...data} />
            <ApartmentCard {...data} />

            <Description thetexte={data.description} />

            <TheMap loc={data.loc} />
          </ScrollView>
        </SafeAreaView>
      )}
    </>
  );
};

export default RoomScreen;
