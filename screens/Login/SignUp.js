import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import CheckBox from "@react-native-community/checkbox";
import * as Yup from "yup";

import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import appStyle from "../../style/login_start";
import signUpStyle from "../../style/SignUp";
import apple from "../../assets/apple.png";
import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import Loading from "../../assets/Loading_icon.gif";
import Toast from "react-native-toast-message";
const arrow_back = require("../../assets/arrow_back.png");
const blind = require("../../assets/Blind.png");
const openEye = require("../../assets/openeye.png");
// const PasswordSchema = Yup.object().shape({
//   passwordLength: Yup.
//  })
const SignUp = ({ navigation }) => {
  const showToast = () => {
    // Function to show Toast
  };

  const [state, setState] = useState({
    color: "black",
    flag: false,
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

  const handleSubmit = async () => {
    // Function to handle form submission
  };

  const togglePasswordVisibility = () => {
    setState((prevState) => ({
      ...prevState,
      passwordVisible: !prevState.passwordVisible, // Toggle password visibility state
    }));
  };

  return (
    <View style={appStyle.body}>
      <TouchableOpacity onPress={() => navigation.navigate("StartLogin")}>
        <Image style={appStyle.arrowbacklogin} source={arrow_back} />
      </TouchableOpacity>
      <Toast />
      <Text style={signUpStyle.welcome}>Create your{"\n"}Account</Text>

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
      </View>
      <View style={appStyle.cardContainer}>
        <TextInput
          mode="outlined"
          theme={{
            colors: { primary: "#FFC44D", underlineColor: "transparent" },
          }}
          style={appStyle.inputSearch}
          secureTextEntry={!state.passwordVisible} // Toggle secureTextEntry based on password visibility
          onChangeText={(text) => handleState(text, "password")}
          placeholder="Password"
        />
        <TouchableOpacity
          style={styles.eyeIconContainer}
          onPress={togglePasswordVisibility}
        >
          <Image
            source={state.passwordVisible ? openEye : blind} // Toggle the eye icon based on password visibility
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={appStyle.leftContainer}>
        <CheckBox />
        <Text style={appStyle.rowLabelText}>Remember Me</Text>
      </View>

      {!state.flag ? (
        <TouchableOpacity
          onPress={() => navigation.navigate("NewPassword")}
          style={appStyle.appButtonContainer}
        >
          <Text style={appStyle.appButtonText}>Sign Up</Text>
        </TouchableOpacity>
      ) : (
        <Image style={styles.loadingIcon} source={Loading} />
      )}

      <View style={appStyle.cardContainer}>
        <Text style={signUpStyle.lineText}>or continue with</Text>
        <Toast ref={(ref) => Toast.setRef(ref)} />
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

      <View style={appStyle.cardContainer}>
        <Text style={appStyle.signUp}>Already have an Account? </Text>
        <Text
          onPress={() => navigation.navigate("Index")}
          style={Style.TextContainer}
        >
          Login
        </Text>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  eyeIconContainer: {
    position: "absolute",
    right: 10,
    top: "50%", // Center the eye icon vertically within the password input field
    transform: [{ translateY: -10 }], // Adjust to vertically center the icon
  },
  eyeIcon: {
    width: 20,
    height: 20,
  },
  loadingIcon: {
    width: 200,
    height: 100,
    alignSelf: "center",
    resizeMode: "stretch",
  },
});

const Style = StyleSheet.create({
  TextContainer: {
    color: "#FFC44D",
    fontWeight: "bold",
    fontSize: 15,
    fontFamily: "Inter",
    left: 70,
  },
});
