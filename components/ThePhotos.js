import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Swiper from "react-native-swiper";

const ThePhotos = props => {
  return (
    <View style={styles.container}>
      {
        <Swiper key={props.photos.length}>
          {props.photos.slice(0, 10).map((photo, index) => {
            return (
              <Image
                source={{
                  uri: photo
                }}
                style={styles.image}
                resizeMode="cover"
                key={index}
              />
            );
          })}
        </Swiper>
      }
    </View>
  );
};
export default ThePhotos;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 400
  },
  image: { height: 350, width: "100%" }
});
