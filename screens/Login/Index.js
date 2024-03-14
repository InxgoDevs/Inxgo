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
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
const logo = require("../../assets/logo.png");
const apple = require("../../assets/svg/Linkedin.png");
const google = require("../../assets/google.png");
const facebook = require("../../assets/facebook.png");
const Loading = require("../../assets/Loading_icon.gif");
const arrow_back = require("../../assets/arrow_back.png");
const blind = require("../../assets/Blind.png");
const openeye = require("../../assets/openeye.png");
const lock = require("../../assets/Lock.png"); // Add lock icon
const email = require("../../assets/Email.png");

const Index = ({ navigation }) => {
  const [state, setState] = useState({
    color: "black",
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    number: "",
    passwordVisible: false, // State variable to track password visibility
  });

  const handleState = (text, key) => {
    setState({ ...state, [key]: text });
  };

  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "SignIn Successfully",
      // text2: 'This is some something 👋'
    });
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setState({ ...state, passwordVisible: !state.passwordVisible });
  };

  return (
    <View style={appStyle.body}>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Image style={appStyle.arrowbacklogin} source={arrow_back} />
      </TouchableOpacity>
      <Toast />
      <View
        style={{
          height: responsiveHeight(30),
          width: responsiveHeight(100),
          flexDirection: "row",
        }}
      >
        <Text style={signUpStyle.welcome}>Login to Your{"\n"}Account</Text>
      </View>

      <View style={appStyle.cardContainer}>
        <TextInput
          mode="outlined"
          theme={{
            colors: { primary: "#FFC44D", underlineColor: "transparent" },
          }}
          style={appStyle.inputSearch}
          onChangeText={(text) => handleState(text, "email")}
          placeholder="Email"
        />
        <Image source={email} style={styles.emailIcon} />
      </View>

      <View style={appStyle.cardContainer}>
        <TextInput
          mode="outlined"
          theme={{
            colors: { primary: "#FFC44D", underlineColor: "transparent" },
          }}
          style={appStyle.inputSearch}
          secureTextEntry={!state.passwordVisible}
          onChangeText={(text) => handleState(text, "password")}
          placeholder="Password"
        />
        <View style={styles.lockIconContainer}>
          <Image source={lock} style={styles.lockIcon} />
        </View>
        <TouchableOpacity
          style={styles.eyeIconContainer}
          onPress={togglePasswordVisibility}
        >
          <Image
            source={state.passwordVisible ? openeye : blind}
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={{ height: responsiveHeight(5) }}>
        <Text
          onPress={() => navigation.navigate("Forget")}
          style={[{ color: "#FFC44D", marginLeft: 20, fontSize: 14 }]}
        >
          Forget the password?
        </Text>
      </View>

      <View style={appStyle.leftContainer}>
        <CheckBox />
        <Text style={appStyle.rowLabelText}>Remember Me</Text>
      </View>
      <View style={{ height: responsiveHeight(10) }}>
        <TouchableOpacity
          onPress={showToast}
          style={appStyle.appButtonContainer}
        >
          <Text style={appStyle.appButtonText}>Sign In</Text>
        </TouchableOpacity>
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
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </View>

      <View style={{ height: responsiveHeight(15), alignItems: "center" }}>
        <Text style={appStyle.signUp}>Don’t have account? </Text>
        <Text
          onPress={() => navigation.navigate("SignUp")}
          style={appStyle.signUpText}
        >
          Sign Up
        </Text>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  lockIconContainer: {
    position: "absolute",
    left: 10, // Adjust as needed
  },
  lockIcon: {
    width: 18,
    height: 18,
  },
  emailIcon: {
    width: 18,
    height: 18,
    alignSelf: "flex-start",
    bottom: 47,
    left: 10,
  },
  eyeIconContainer: {
    position: "absolute",
    right: 10, // Adjust as needed
  },
  eyeIcon: {
    width: 20,
    height: 20,
  },
});
