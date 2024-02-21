import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import appStyle from "../../style/login_start";
import signUpStyle from "../../style/SignUp";
import apple from "../../assets/apple.png";
import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import Loading from "../../assets/Loading_icon.gif";
import Toast from "react-native-toast-message";
import ApiCall from "../../Services/ApiCall";

const SignUp = ({ navigation }) => {
  const [state, setState] = useState({
    color: "black",
    flag: false,
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    number: "",
  });

  const handleState = (e, key) => {
    if (key === "confirm_password") {
      if (state.password !== state.confirm_password) {
        setState({ ...state, color: "red" });
      } else {
        setState({ ...state, color: "black" });
      }
    }
    setState({ ...state, [key]: e.nativeEvent.text });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ ...state, flag: true });

    const data = {
      email: state.email,
      password: state.password,
      name: state.name,
      number: state.number,
      is_admin: 0,
      role_id: 2,
    };

    const response = await ApiCall.postAPICall(1, "user", data);
    if (response.code === 200) {
      Toast.show({
        type: "success",
        position: "top",
        text1: response.message,
        text2: "Please go to the login page and use these credentials",
        topOffset: 80,
      });
    } else {
      let errors = response.error;
      let inside = Object.keys(errors);
      let obj = {
        type: "error",
        position: "top",
        topOffset: 80,
      };
      for (let i = 0; i < inside.length; i++) {
        let temp = errors[inside[i]][0];
        obj["text" + (i + 1)] = temp;
      }
      Toast.show(obj);
    }

    setState({ ...state, flag: false });
  };

  useEffect(() => {
    console.log(navigation);
  }, []);

  return (
    <ScrollView keyboardDismissMode={"on-drag"} style={appStyle.body}>
      <View>
        <Toast />
        <Text style={signUpStyle.welcome}>Create your Account</Text>
        <View style={appStyle.cardContainer}>
          <TextInput
            mode="outlined"
            theme={{
              colors: { primary: "black", underlineColor: "transparent" },
            }}
            style={appStyle.inputSearch}
            onChange={(e) => handleState(e, "name")}
            placeholder="Name"
          />
        </View>
        <View style={appStyle.cardContainer}>
          <TextInput
            mode="outlined"
            theme={{
              colors: { primary: "black", underlineColor: "transparent" },
            }}
            style={appStyle.inputSearch}
            onChange={(e) => handleState(e, "email")}
            placeholder="Email"
          />
        </View>
        <View style={appStyle.cardContainer}>
          <TextInput
            mode="outlined"
            theme={{
              colors: { primary: "black", underlineColor: "transparent" },
            }}
            style={appStyle.inputSearch}
            secureTextEntry={true}
            onChange={(e) => handleState(e, "password")}
            placeholder="Password"
          />
        </View>
        <View style={appStyle.cardContainer}>
          <TextInput
            mode="outlined"
            theme={{
              colors: { primary: state.color, underlineColor: "transparent" },
            }}
            style={appStyle.inputSearch}
            secureTextEntry={true}
            onChange={(e) => handleState(e, "confirm_password")}
            placeholder="Confirm Password"
          />
        </View>
        <View style={appStyle.cardContainer}>
          <TextInput
            mode="outlined"
            theme={{
              colors: { primary: "black", underlineColor: "transparent" },
            }}
            style={appStyle.inputSearch}
            onChange={(e) => handleState(e, "number")}
            placeholder="Number"
          />
        </View>
        {!state.flag ? (
          <TouchableOpacity
            onPress={handleSubmit}
            style={appStyle.appButtonContainer}
          >
            <Text style={appStyle.appButtonText}>Sign Up</Text>
          </TouchableOpacity>
        ) : (
          <Image
            style={{
              width: 200,
              height: 100,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              resizeMode: "stretch",
            }}
            source={Loading}
          />
        )}
        <View style={appStyle.cardContainer}>
          <View style={appStyle.line} />
          <View>
            <Text style={signUpStyle.lineText}>or continue with</Text>
          </View>
          <View style={appStyle.line} />
        </View>
        <View style={appStyle.cardContainer}>
          <TouchableOpacity style={signUpStyle.appButtonSoical}>
            <View style={appStyle.leftContainer}>
              <Image style={appStyle.google} source={apple} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={signUpStyle.appButtonSoical}>
            <View style={signUpStyle.centerContainer}>
              <Image style={appStyle.google} source={google} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={signUpStyle.appButtonSoical}>
            <View style={signUpStyle.centerContainer}>
              <Image style={appStyle.google} source={facebook} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={appStyle.cardContainer}>
          <Text style={appStyle.signUp}>Have account? </Text>
          <Text
            onPress={() => navigation.navigate("Login")}
            style={appStyle.signUpText}
          >
            {" "}
            Sign In
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
