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
import glogo from "../../assets/glogo.png";
import fblogo from "../../assets/fblogo.png";
import Loading from "../../assets/Loading_icon.gif";
import Toast from "react-native-toast-message";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Regular } from "../../constants/fonts";
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
    confirmPasswordVisible: false, // State variable for confirm password visibility

  });

  const handleState = (text, key) => {
    setState({ ...state, [key]: text });
  };

  const handleSubmit = async (values, formikActions) => {
    console.log("values", values);
    const formData = new FormData();
    // Append each value to formData
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("password_confirmation", values.confirmPassword);

    console.log("FormData:", formData);

    // Add your axios request here
    axios
      .post("https://inxgo.com/public/api/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      .then((response) => {
        console.log("Response", response.data);
       // Alert.alert("Success", "Account created successfully!");
        navigation.navigate("Login")
      })
      .catch((error) => {
        console.error("Error:", error);
        Alert.alert(
          "Error",
          "An error occurred while processing your request."
        );
      })
      .finally(() => {
        formikActions.setSubmitting(false); // Set submitting to false regardless of success or failure
      });
  };
  const togglePasswordVisibility = (field) => {
    setState((prevState) => ({
      ...prevState,
      // passwordVisible: !prevState.passwordVisible, 
      [`${field}Visible`]: !prevState[`${field}Visible`], //
      // Toggle password visibility state
    }));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled
      style={{ flex: 1 }}
    >
      <ScrollView>
        <View style={appStyle.body}>
          <View
            style={{
              height: responsiveHeight(25),
              // backgroundColor: "blue",
              width: responsiveWidth(100),
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("StartLogin")}>
              <Image style={appStyle.arrowbacklogin} source={arrow_back} />
            </TouchableOpacity>
            <Toast />
            <Text style={signUpStyle.welcome}>Create your{"\n"}Account</Text>
          </View>

          <View style={styles.container}>
            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={Yup.object({
                name: Yup.string().required("Name is Required"),
                email: Yup.string()
                  .email("Invalid Email")
                  .required("Email is Required"),
                password: Yup.string()
                  .required("Password is required")
                  .min(6, "Password must be at least 6 characters"),
                confirmPassword: Yup.string()
                  .oneOf([Yup.ref("password"), null], "Passwords must match")
                  .required("Confirm Password is required"),
              })}
              onSubmit={handleSubmit} // Pass handleSubmit function here
              // onSubmit={(values, formikActions) => {
              //   setTimeout(() => {
              //     Alert.alert(JSON.stringify(values));
              //     formikActions.setSubmitting(false);
              //   }, 500);
              // }}
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
                  <View>

                 
                  <TextInput
                    onChangeText={props.handleChange("password")}
                    onBlur={props.handleBlur("password")}
                    value={props.values.password}
                    placeholder="Password"
                    secureTextEntry={!state.passwordVisible}

                    style={styles.input}
                    ref={passwordInput}
                  />
                  <TouchableOpacity
          style={styles.eyeIconContainer}
          onPress={() => togglePasswordVisibility('password')} // Toggle visibility for the password field
        >
          <Image
            source={state.passwordVisible ? openEye : blind}
            style={styles.eyeIcon}
          />
            {/* <View style={appStyle.leftContainer}>
        <CheckBox />
        <Text style={appStyle.rowLabelText}>Remember Me</Text>
      </View>  */}
          
        </TouchableOpacity>
        </View>
                  {props.touched.password && props.errors.password ? (
                    <Text style={styles.error}>{props.errors.password}</Text>
                  ) : null}
                  <View>
                  
                 
                  <TextInput
                    onChangeText={props.handleChange("confirmPassword")}
                    onBlur={props.handleBlur("confirmPassword")}
                    value={props.values.confirmPassword}
                    placeholder="Confirm Password"
                    secureTextEntry={!state.confirmPasswordVisible}

                    style={styles.input}
                    ref={confirmPasswordInput}
                  />
                 <TouchableOpacity
          style={styles.eyeIconContainer}
          onPress={() => togglePasswordVisibility('confirmPassword')}        >
          <Image
            source={state.confirmPasswordVisible ? openEye : blind}
            style={styles.eyeIcon}
          />
            {/* <View style={appStyle.leftContainer}>
        <CheckBox />
        <Text style={appStyle.rowLabelText}>Remember Me</Text>
      </View>  */}
          
        </TouchableOpacity>
                 </View>
                  {props.touched.confirmPassword &&
                  props.errors.confirmPassword ? (
                    <Text style={styles.error}>
                      {props.errors.confirmPassword}
                    </Text>
                    
                  ) : null}
                  
                  <Button
                    onPress={props.handleSubmit} // Use Formik's handleSubmit
                    mode="contained"
                    loading={props.isSubmitting}
                    disabled={props.isSubmitting}
                    style={{
                      marginTop: 6,
                      backgroundColor: "#FFC44D",
                      fontSize: 14,
                      fontWeight: "500",
                      fontFamily: Regular,
                    }}
                  >
                    Sign Up
                  </Button>
                </View>
              )}
            </Formik>
          </View>

          <View style={appStyle.cardContainer}>
            <Text style={signUpStyle.lineText}>or continue with</Text>
            <Toast ref={(ref) => Toast.setRef(ref)} />
          </View>

          <View style={appStyle.iContainer}>
            <TouchableOpacity style={signUpStyle.appButtonSoical}>
              <Image style={appStyle.google} source={apple} />
            </TouchableOpacity>
            <TouchableOpacity style={signUpStyle.appButtonSoical}>
              <Image style={appStyle.google} source={glogo} />
            </TouchableOpacity>
            <TouchableOpacity style={signUpStyle.appButtonSoical}>
              <Image style={appStyle.google} source={fblogo} />
            </TouchableOpacity>
          </View>

          <View style={appStyle.cardContainer2}>
            <Text style={appStyle.signUp}>Already have an Account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.TextContainer}>Login</Text>
            </TouchableOpacity>
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
    fontFamily: "Regular",
  },
  container: {
    height: responsiveHeight(55),
    width: responsiveWidth(100),
    // backgroundColor: "black",
    paddingTop: 1,
    backgroundColor: "#fafafa",
    padding: 18,
  },
  title: {
    margin: 24,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  error: {
    margin: 1,
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
  },
  input: {
    height: 50,
    paddingHorizontal: 8,
    width: "100%",
    borderColor: "#FECD45",
    borderWidth: 2,
    backgroundColor: "#fafafa",
    marginBottom: 10,
    borderRadius: 10,
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
