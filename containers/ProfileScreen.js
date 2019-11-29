import React, { useState, useEffect } from "react";
import {
  Button,
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  Image,
  ScrollView
} from "react-native";
import axios from "axios";
import PhotoLoad from "../components/PhotoLoad";

export default function ProfileScreen({ userId, userToken, setToken }) {
  const [data, setData] = useState(null);
  //pour declencher un reload depuis PhotoLoad
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const fetchData = async (userId, userToken) => {
      try {
        const response = await axios.get(
          `https://airbnb-api.herokuapp.com/api/user/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${userToken}`
            }
          }
        );
        setData(response.data.account);
        setReload(false);
      } catch (e) {
        alert(e.error);
      }
    };

    fetchData(userId, userToken);
  }, [reload]);

  return (
    <>
      {!data ? (
        <View style={styles.waiting}>
          <ActivityIndicator size="large" color="red" />
        </View>
      ) : (
        <ScrollView style={styles.motherbox}>
          <Text style={styles.username}>{data.username}</Text>
          <Text>{data.description}</Text>

          <Image
            source={{ uri: data.photos[0] }}
            style={styles.userphoto}
            resizeMode="cover"
          />
          <Button
            title="Log Out"
            onPress={() => {
              setToken(null, null);
            }}
          />
          <PhotoLoad userToken={userToken} setReload={setReload} />
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  waiting: { flex: 1, justifyContent: "center", backgroundColor: "lightblue" },
  motherbox: {
    backgroundColor: "lightblue",
    flex: 1
  },
  userphoto: {
    height: 150,
    width: 150,
    borderRadius: 75
  },
  username: {
    fontSize: 20
  }
});
