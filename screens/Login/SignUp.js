import React, { useState, useRef } from "react";
import { TextInput, Button } from "react-native-paper";
import CheckBox from "@react-native-community/checkbox";
import * as Yup from "yup";
import axios from "axios";

import { Formik } from "formik";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
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
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const confirmPasswordInput = useRef(null);
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

  const handleSubmit = async (values) => {
    try {
      const formdata = new FormData();
      formdata.append("name", values.name);
      formdata.append("email", values.email);
      formdata.append("password", values.password);
      formdata.append("password_confirmation", values.confirmPassword);

      const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      const response = await fetch(
        "http://127.0.0.1:8000/api/register",
        requestOptions
      );
      const result = await response.text();

      console.log(result);
      Alert.alert("Success", "Account created successfully!");
      navigation.navigate("StartLogin");
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Error", "An error occurred while processing your request.");
    }
  };

  const togglePasswordVisibility = () => {
    setState((prevState) => ({
      ...prevState,
      passwordVisible: !prevState.passwordVisible, // Toggle password visibility state
    }));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={appStyle.body}>
          <TouchableOpacity onPress={() => navigation.navigate("StartLogin")}>
            <Image style={appStyle.arrowbacklogin} source={arrow_back} />
          </TouchableOpacity>
          <Toast />
          <Text style={signUpStyle.welcome}>Create your{"\n"}Account</Text>
          <View style={styles.container}>
            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={Yup.object({
                name: Yup.string().required("Required"),
                email: Yup.string().email("Invalid Email").required("Required"),
                password: Yup.string()
                  .required("Password is required")
                  .min(6, "Password must be at least 6 characters"),
                confirmPassword: Yup.string()
                  .oneOf([Yup.ref("password"), null], "Passwords must match")
                  .required("Confirm Password is required"),
              })}
              onSubmit={(values, formikActions) => {
                setTimeout(() => {
                  Alert.alert(JSON.stringify(values));
                  formikActions.setSubmitting(false);
                }, 500);
              }}
            >
              {(props) => (
                <View>
                  <TextInput
                    onChangeText={props.handleChange("name")}
                    onBlur={props.handleBlur("name")}
                    value={props.values.name}
                    autoFocus
                    placeholder="Your Name"
                    style={styles.input}
                  />
                  {props.touched.name && props.errors.name ? (
                    <Text style={styles.error}>{props.errors.name}</Text>
                  ) : null}
                  <TextInput
                    onChangeText={props.handleChange("email")}
                    onBlur={props.handleBlur("email")}
                    value={props.values.email}
                    placeholder="Email Address"
                    style={styles.input}
                    ref={emailInput}
                  />
                  {props.touched.email && props.errors.email ? (
                    <Text style={styles.error}>{props.errors.email}</Text>
                  ) : null}
                  <TextInput
                    onChangeText={props.handleChange("password")}
                    onBlur={props.handleBlur("password")}
                    value={props.values.password}
                    placeholder="Password"
                    secureTextEntry
                    style={styles.input}
                    ref={passwordInput}
                  />
                  {props.touched.password && props.errors.password ? (
                    <Text style={styles.error}>{props.errors.password}</Text>
                  ) : null}
                  <TextInput
                    onChangeText={props.handleChange("confirmPassword")}
                    onBlur={props.handleBlur("confirmPassword")}
                    value={props.values.confirmPassword}
                    placeholder="Confirm Password"
                    secureTextEntry
                    style={styles.input}
                    ref={confirmPasswordInput}
                  />
                  {props.touched.confirmPassword &&
                  props.errors.confirmPassword ? (
                    <Text style={styles.error}>
                      {props.errors.confirmPassword}
                    </Text>
                  ) : null}
                  <Button
                    onPress={handleSubmit}
                    // color="black"
                    mode="contained"
                    loading={props.isSubmitting}
                    disabled={props.isSubmitting}
                    style={{ marginTop: 16, backgroundColor: "#FFC44D" }}
                  >
                    Submit
                  </Button>
                </View>
              )}
            </Formik>
          </View>
          <View style={appStyle.leftContainer}>
            {/* <CheckBox /> */}
            {/* <Text style={appStyle.rowLabelText}>Remember Me</Text> */}
          </View>

          {/* {!state.flag ? (
        <TouchableOpacity
          onPress={() => navigation.navigate("NewPassword")}
          style={appStyle.appButtonContainer}
        >
          <Text style={appStyle.appButtonText}>Sign Up</Text>
        </TouchableOpacity>
      ) : (
        <Image style={styles.loadingIcon} source={Loading} />
      )} */}

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
              style={styles.TextContainer}
            >
              Login
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  TextContainer: {
    color: "#FFC44D",
    fontWeight: "bold",
    fontSize: 15,
    fontFamily: "Inter",
    left: 70,
  },
  container: {
    paddingTop: 1,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  error: {
    margin: 2,
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
  },
  input: {
    height: 50,
    paddingHorizontal: 8,
    width: "100%",
    borderColor: "#ddd",
    borderWidth: 1,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
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
