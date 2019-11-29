import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";

import {
  Button,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity
} from "react-native";
import Apartment from "../components/Apartment";
// import axios from "axios";

const ListApartments = props => {
  const navigation = useNavigation();

  data = props.data;

  return (
    <>
      <View>
        <FlatList
          data={data}
          keyExtractor={item => String(item._id)}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Room", { roomId: item._id })}
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
    </>
  );
};

export default ListApartments;
