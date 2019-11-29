import React, { useState } from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { View, ActivityIndicator } from "react-native";
import ListApartments from "../components/ListApartments";
import ListMap from "../components/ListMap";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  const [data, setData] = useState(null);

  //Fetch Datas on Load Only

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://airbnb-api.herokuapp.com/api/room?city=paris"
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
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
            activeBackgroundColor: "#EDEDED",
            inactiveBackgroundColor: "red",
            labelStyle: { fontSize: 15 },
            tabStyle: { width: 130 },
            style: { backgroundColor: "lightgray" },
            indicatorStyle: { backgroundColor: "black" }
          }}
        >
          <Tab.Screen name="Vue Liste">
            {() => <ListApartments data={data.rooms} />}
          </Tab.Screen>
          <Tab.Screen name="Vue Carte">
            {() => <ListMap data={data} />}
          </Tab.Screen>
        </Tab.Navigator>
      )}
    </>
  );
};

export default HomeScreen;
