import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native-paper";
import CheckBox from "@react-native-community/checkbox";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
import ApiCall from "../../Services/ApiCall";
import { SvgUri, SvgXml } from "react-native-svg";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
const logo = require("../../assets/logo.png");
const apple = require("../../assets/apple.png");
const google = require("../../assets/google.png");
const facebook = require("../../assets/facebook.png");
const Loading = require("../../assets/Loading_icon.gif");

const Index = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [errorEmail, setErrorEmail] = useState("");

  const handleEmail = (text) => {
    setEmail(text);
  };

  const handlePassword = (text) => {
    setPassword(text);
  };

  const handleSubmit = async () => {
    setFlag(true);

    const data = {
      email: email,
      password: password,
      deviceID: "abcffdfddf",
    };

    console.log("call laravel");
    var Bearertoken = "Bearer ";
    AsyncStorage.setItem("Bearertoken", JSON.stringify(Bearertoken));
    var response = await ApiCall.postAPICall(1, "login", data);
    if (response.status) {
      setIsLogin(true);
      AsyncStorage.setItem("user", JSON.stringify(response.data));
      var token = response.custom;
      AsyncStorage.setItem("token", JSON.stringify(token));
      AsyncStorage.setItem("permisions", JSON.stringify(response.permisions));
      AsyncStorage.setItem("isLogin", true);
      navigation.navigate("Home");
    } else {
      const errors = response.error;
      setErrorEmail(errors);
      Toast.show({
        type: "error",
        position: "top",
        text2: errors,
        topOffset: 80,
      });
    }
    setFlag(false);
  };

  return (
    <ScrollView keyboardDismissMode={"on-drag"} style={appStyle.body}>
      <View>
        <Toast />
        <Text style={signUpStyle.welcome}>Login to Your Account</Text>
        <View style={appStyle.cardContainer}>
          <TextInput
            mode="outlined"
            theme={{
              colors: { primary: "black", underlineColor: "transparent" },
            }}
            style={appStyle.inputSearch}
            onChangeText={handleEmail}
            placeholder="Email"
          ></TextInput>
        </View>
        <View style={appStyle.cardContainer}>
          <TextInput
            secureTextEntry={true}
            mode="outlined"
            theme={{
              colors: { primary: "black", underlineColor: "transparent" },
            }}
            style={appStyle.inputSearch}
            onChangeText={handlePassword}
            placeholder="Password"
          ></TextInput>
        </View>
        <View style={appStyle.cardContainer}>
          <View style={appStyle.leftContainer}>
            <CheckBox style={appStyle.remember} />
            <Text style={appStyle.rowLabelText}>Remember Me</Text>
          </View>
        </View>
        {!flag ? (
          <TouchableOpacity
            onPress={handleSubmit}
            style={appStyle.appButtonContainer}
          >
            <Text style={appStyle.appButtonText}>Sign In</Text>
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
          <View style={appStyle.leftContainer}>
            <Text
              onPress={() => navigation.navigate("Forget")}
              style={[appStyle.rowLabelText, { color: "#FFC44D", left: 10 }]}
            >
              Forget the password?
            </Text>
          </View>
        </View>
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
          <Text style={appStyle.signUp}>Don’t have account? </Text>
          <Text
            onPress={() => navigation.navigate("SignUp")}
            style={appStyle.signUpText}
          >
            {" "}
            Sign Up
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Index;
