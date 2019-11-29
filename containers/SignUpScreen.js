import React, { useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/core";

import {
  Button,
  Text,
  TextInput,
  View,
  Platform,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import Constants from "expo-constants";
import colors from "../colors";
import { Ionicons } from "@expo/vector-icons";

const signUpAttempt = async (
  email,
  password,
  username,
  name,
  description,
  setToken,
  setError
) => {
  try {
    const response = await axios.post(
      "https://airbnb-api.herokuapp.com/api/user/sign_up",
      {
        email,
        password,
        username,
        name,
        description
        // email: email,
        // password: password
      }
    );
    alert("you made it!");
    setToken(response.data.token, response.data._id);
  } catch (e) {
    alert("login fail");
    setError(true);
  }
};

export default function SignUpScreen({ setToken }) {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("brocoli");
  const [name, setName] = useState("Mr Mc Lovin");
  const [description, setDescription] = useState("I'm Awesome");
  const [error, setError] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Ionicons
          name="md-create"
          size={100}
          color="white"
          style={styles.marginVertical}
        />

        <Text style={{ ...styles.welcome }}>Sign Up</Text>
        <View style={styles.hr}>
          <TextInput
            placeholder="x@y.z"
            placeholderTextColor="white"
            autoCapitalize="none"
            style={[styles.textInput]}
            selectionColor="white"
            onChangeText={text => {
              setEmail(text);
            }}
          />
        </View>

        <View style={styles.hr}>
          <TextInput
            placeholder="qwerty"
            placeholderTextColor="white"
            style={styles.textInput}
            autoCapitalize="none"
            // secureTextEntry={true}
            selectionColor="white"
            onChangeText={text => {
              setPassword(text);
            }}
          />
        </View>
        <View style={styles.hr}>
          <TextInput
            placeholder="brocoli"
            placeholderTextColor="white"
            autoCapitalize="none"
            style={[styles.textInput]}
            selectionColor="white"
            onChangeText={text => {
              setUsername(text);
            }}
          />
        </View>
        <View style={styles.hr}>
          <TextInput
            placeholder="Mr McLovin"
            placeholderTextColor="white"
            autoCapitalize="none"
            style={[styles.textInput]}
            selectionColor="white"
            onChangeText={text => {
              setName(text);
            }}
          />
        </View>
        <View style={styles.hr}>
          <TextInput
            placeholder="I'm Awesome and blah blah"
            placeholderTextColor="white"
            style={[styles.textInput]}
            selectionColor="white"
            onChangeText={text => {
              setDescription(text);
            }}
          />
        </View>

        <TouchableOpacity
          style={styles.btn}
          mode="contained"
          onPress={async () => {
            signUpAttempt(
              email,
              password,
              username,
              name,
              description,
              setToken,
              setError
            );
          }}
        >
          <Text style={styles.btnText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#E6BDB4",
    alignItems: "center",
    flex: 1
  },
  marginVertical: {
    marginVertical: 30
  },
  welcome: {
    color: "white",
    fontSize: 50,
    marginVertical: 20
  },
  center: {
    alignItems: "center"
  },
  textInput: {
    paddingHorizontal: 10,
    color: "white"
  },
  hr: {
    paddingBottom: 5,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    marginVertical: 15,
    width: 300
  },
  btn: {
    marginVertical: 30,
    backgroundColor: "white",
    padding: 5,
    color: colors.red,
    borderRadius: 30,
    width: 125
  },
  btnText: {
    fontSize: 20,
    padding: 7,
    color: colors.red,
    textAlign: "center"
  }
});
