import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { Button, Text, View, ScrollView, FlatList } from "react-native";
import Apartment from "../components/Apartment";
import axios from "axios";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(null);

  //Fetch Datas on Load Only

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://airbnb-api.now.sh/api/room?city=paris"
        );
        setData(response.data.rooms);
      } catch (e) {
        alert(e.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ScrollView>
        {data && (
          <View>
            <FlatList
              data={data}
              keyExtractor={item => String(item._id)}
              renderItem={({ item }) => <Apartment {...item} />}
            />
          </View>
        )}
      </ScrollView>
    </>
  );
};

export default HomeScreen;
