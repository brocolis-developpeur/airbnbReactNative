import React, { useState } from "react";
import axios from "axios";
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

const loginAttempt = async (email, password, setToken, setError) => {
  try {
    const response = await axios.post(
      "https://airbnb-api.now.sh/api/user/log_in",
      {
        email,
        password
        // email: email,
        // password: password
      }
    );
    const token = response.data.token;
    setToken(token);
  } catch (e) {
    alert("login fail");
    setError(true);
  }
};

export default function SignInScreen({ setToken }) {
  const [email, setEmail] = useState("arno@airbnb-api.com");
  const [password, setPassword] = useState("password01");
  const [error, setError] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        {Platform.OS === "ios" ? (
          <Ionicons
            name="ios-home"
            size={100}
            color="white"
            style={styles.marginVertical}
          />
        ) : (
          <Ionicons
            name="md-home"
            size={100}
            color="white"
            style={styles.marginVertical}
          />
        )}

        <Text style={{ ...styles.welcome }}>Welcome</Text>
        {/* <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}> */}
        <View style={styles.hr}>
          <TextInput
            placeholder="name@airbnb-api.com"
            placeholderTextColor="white"
            style={[styles.textInput, { backgroundColor: error && "red" }]}
            selectionColor="white"
            onChangeText={text => {
              setEmail(text);
            }}
          />
        </View>

        <View style={styles.hr}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="white"
            style={[
              styles.textInput,
              { backgroundColor: error ? "red" : colors.red }
            ]}
            secureTextEntry={true}
            selectionColor="white"
            onChangeText={text => {
              setPassword(text);
            }}
          />
        </View>
        {/* </KeyboardAvoidingView> */}

        <TouchableOpacity
          style={styles.btn}
          mode="contained"
          onPress={async () => {
            loginAttempt(email, password, setToken, setError);
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
    backgroundColor: colors.red,
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
