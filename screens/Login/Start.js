import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native-paper";
import CheckBox from "@react-native-community/checkbox";
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
import { SvgUri, SvgXml } from "react-native-svg";
import { NavigationContainer } from "@react-navigation/native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const login = require("../../assets/login.png");
const apple = require("../../assets/svg/Facebook.png");
const google = require("../../assets/google.png");
const facebook = require("../../assets/svg/Linkedin.png");

const Start = ({ navigation }) => {
  useEffect(() => {
    console.log(navigation);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View>
        <View style={{ height: responsiveHeight(45) }}>
          <Image style={appStyle.logo} source={login} />

          <Text style={appStyle.welcome}>Let's get you in</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Start")}
          style={appStyle.appButtonContainer}
        >
          <Text style={appStyle.appButtonText}>Login in with Email</Text>
        </TouchableOpacity>
      </View>

      <View style={appStyle.cardContainer}>
        <Text style={style.text1} onPress={() => navigation.navigate("Home")}>
          Skip Log in for now
        </Text>
        {/* <Text
            onPress={() => navigation.navigate("SignUp")}
            style={appStyle.signUpText}
          >
            Sign Up
          </Text> */}
      </View>
    </View>
  );
};

export default Start;
const style = StyleSheet.create({
  text1: {
    fontWeight: "600",
    color: "#FFC44D",
    fontSize: 13,

    fontFamily: "Inter",
    //top:20,
    //right:30,
  },
});
