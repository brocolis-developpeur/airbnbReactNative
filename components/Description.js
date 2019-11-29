import React, { useState } from "react";

import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Description(props) {
  const [alltext, setAlltext] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        setAlltext(!alltext);
      }}
    >
      {alltext ? (
        <Text style={styles.description}>{props.thetexte} </Text>
      ) : (
        <Text style={styles.description} numberOfLines={1}>
          {props.thetexte}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  description: {
    fontSize: 17,
    padding: 20
  }
});
