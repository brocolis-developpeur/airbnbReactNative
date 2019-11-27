import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  ActivityIndicator,
  Button,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity
} from "react-native";
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

  // Note : Flastlist Scroll tout seul
  return (
    <>
      {!data ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          {/* Revoir pour centrer */}
          <ActivityIndicator size="large" color="red" />
        </View>
      ) : (
        <View>
          <FlatList
            data={data}
            keyExtractor={item => String(item._id)}
            //Revoir il a mis return directement
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Room", { roomId: item._id })
                }
              >
                <View
                  style={{
                    margin: 20,
                    borderBottomColor: "grey",
                    borderBottomWidth: 1
                  }}
                >
                  <Apartment {...item} />
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </>
  );
};

export default HomeScreen;
