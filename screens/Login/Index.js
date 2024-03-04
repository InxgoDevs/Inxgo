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
import { responsiveHeight } from "react-native-responsive-dimensions";
const logo = require("../../assets/logo.png");
const apple = require("../../assets/svg/Linkedin.png");
const google = require("../../assets/google.png");
const facebook = require("../../assets/facebook.png");
const Loading = require("../../assets/Loading_icon.gif");
const arrow_back = require("../../assets/arrow_back.png");
const blind = require("../../assets/Blind.png");

const Index = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [errorEmail, setErrorEmail] = useState("");
  const [passwordHidden, setPasswordHidden] = useState(false);

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
    <View style={appStyle.body}>
      <TouchableOpacity onPress={() => navigation.navigate("StartLogin")}>
        <Image style={appStyle.arrowbacklogin} source={arrow_back} />
      </TouchableOpacity>
      <Toast />
      <View
        style={{ height: responsiveHeight(30), width: responsiveHeight(100) }}
      >
        <Text style={signUpStyle.welcome}>Login to Your{"\n"}Account</Text>
      </View>
      <View style={appStyle.cardContainerLs}>
        <TextInput
          mode="outlined"
          theme={{
            colors: { primary: "black", underlineColor: "transparent" },
          }}
          style={appStyle.inputSearch}
          onChangeText={handleEmail}
          placeholder="Email"
        ></TextInput>

        <TextInput
          secureTextEntry={true} // Toggle this state to show/hide password           
           mode="outlined"
          theme={{
            colors: { primary: "black", underlineColor: "transparent" },
          }}
          style={appStyle.inputSearch}
          onChangeText={handlePassword}
          placeholder="Password"
        >

        </TextInput>
        
        <TouchableOpacity
            style={{ position: "absolute", right: 10, top: 12 }} // Adjust position as needed
            onPress={() => setPasswordHidden(!passwordHidden)} // Toggle the state to show/hide password
          >
            <Image source={blind} style={{ width: 20, height: 20,top:110,right:25,    position: 'absolute',
}} />
          </TouchableOpacity>
      </View>
      <View style={{ height: responsiveHeight(5) }}>
        <Text
          onPress={() => navigation.navigate("Forget")}
          style={[{ color: "#FFC44D", marginLeft: 25, fontSize: 14 }]}
        >
          Forget the password?
        </Text>
      </View>

      <View style={appStyle.leftContainer}>
        <CheckBox />
        <Text style={appStyle.rowLabelText}>Remember Me</Text>
      </View>
      <View style={{ height: responsiveHeight(10) }}>
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
      </View>

      <View style={{ height: responsiveHeight(5) }}>
        <Text style={signUpStyle.lineText}>or continue with</Text>
      </View>

      <View style={appStyle.iContainer}>
        <TouchableOpacity style={signUpStyle.appButtonSoical}>
          <Image style={appStyle.google} source={apple} />
        </TouchableOpacity>
        <TouchableOpacity style={signUpStyle.appButtonSoical}>
          <Image style={appStyle.google} source={google} />
        </TouchableOpacity>
        <TouchableOpacity style={signUpStyle.appButtonSoical}>
          <Image style={appStyle.google} source={facebook} />
        </TouchableOpacity>
      </View>
      <View style={{ height: responsiveHeight(15), alignItems: "center" }}>
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
  );
};

export default Index;
