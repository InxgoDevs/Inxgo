import React, { useState, useRef } from "react";
import { TextInput, Button } from "react-native-paper";
import CheckBox from "@react-native-community/checkbox";
import * as Yup from "yup";
import axios from "axios";
const lock = require("../../assets/Lock.png"); // Add lock icon
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { Bold } from "../../constants/fonts";
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
const openeye = require("../../assets/openeye.png");

import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Regular } from "../../constants/fonts";
const arrow_back = require("../../assets/arrow_back.png");
const blind = require("../../assets/Blind.png");
const openEye = require("../../assets/openeye.png");
const email = require("../../assets/Email.png");
// const PasswordSchema = Yup.object().shape({
//   passwordLength: Yup.
//  })
const Index = ({ navigation }) => {
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
      .post("http://192.168.100.12:8082/api/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      .then((response) => {
        console.log("Response", response.data);
        Alert.alert("Success", "Account created successfully!");
        // Do any navigation here
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
  const togglePasswordVisibility = () => {
    setState((prevState) => ({
      ...prevState,
      passwordVisible: !prevState.passwordVisible, // Toggle password visibility state
    }));
    const togglePasswordVisibility = () => {
      setState({ ...state, passwordVisible: !state.passwordVisible });
    };
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
             //  backgroundColor: "blue",
              width: responsiveWidth(100),
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("StartLogin")}>
              <Image style={appStyle.arrowbacklogin} source={arrow_back} />
            </TouchableOpacity>
            <Toast />
            <Text style={styles.welcomel}>Login to your {"\n"}Account</Text>
          </View>

          <View style={styles.container}>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={Yup.object({
                name: Yup.string().required("Name is Required"),
                email: Yup.string()
                  .email("Invalid Email")
                  .required("Email is Required"),
                password: Yup.string()
                  .required("Password is required")
                  .min(6, "Password must be at least 6 characters"),
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
                  <Image source={email} style={styles.emailIcon} />
                  {props.touched.email && props.errors.email ? (
                    <Text style={styles.error}>{props.errors.email}</Text>
                  ) : null}
                  <TextInput
                    onChangeText={props.handleChange("password")}
                    onBlur={props.handleBlur("password")}
                    value={props.values.password}
                    placeholder="Password"
                    secureTextEntry={!state.passwordVisible}
                    style={styles.input}
                    ref={passwordInput}
                  />
                   <View style={styles.lockIconContainer}>
          <Image source={lock} style={styles.lockIcon} />
        </View>
        <View style={{justifyContent:'flex-end',alignItems:"flex-end",bottom:25}}>
        <Text
          onPress={() => navigation.navigate("Forget")}
          style={[{ color: "#FFC44D",  fontSize: 12,fontFamily:Regular }]}
        >
          Forget Password?
        </Text>
      </View>
      
        
      
     
        <TouchableOpacity
          style={styles.eyeIconContainer}
          onPress={togglePasswordVisibility}
        >
          <Image
            source={state.passwordVisible ? openeye : blind}
            style={styles.eyeIcon}
          />
            {/* <View style={appStyle.leftContainer}>
        <CheckBox />
        <Text style={appStyle.rowLabelText}>Remember Me</Text>
      </View>  */}
          
        </TouchableOpacity>
        
                  {props.touched.password && props.errors.password ? (
                    <Text style={styles.error2}>{props.errors.password}</Text>
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
                    Login
                  </Button>
                  </View>
                  
              )}
            </Formik>
          </View>

          <View style={styles.cardContainerl}>
          <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
          <Text style={signUpStyle.lineText}>or Continue With</Text>
          </TouchableOpacity>
            
            <Toast ref={(ref) => Toast.setRef(ref)} />
          </View>

          <View style={styles.iContainerl}>
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

          <View style={styles.cardContainer3}>
            <Text style={appStyle.signUp}>Don’t have an account? </Text>
            <Text
              onPress={() => navigation.navigate("SignUp")}
              style={styles.TextContainer}
            >
              SignUp
            </Text>
          </View>
          <View style={{height:responsiveHeight(10)}}>

          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Index;

const styles = StyleSheet.create({
  TextContainer: {
    color: "#FFC44D",
    fontWeight: "bold",
    fontSize: 15,
    fontFamily: "Regular",
  },
  container: {
    height: responsiveHeight(40),
    width: responsiveWidth(100),
   // backgroundColor: "black",
    //paddingTop: 1,
   // backgroundColor: "orange",
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
    bottom:10
  },
  error2: {
    margin: 1,
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    bottom:45
  },
  input: {
    height:50,
    paddingHorizontal:40,
    paddingVertical:2,
    width: "100%",
    fontFamily:Regular,
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
    bottom:10,
    //position:'absolute'
  },
  loadingIcon: {
    width: 200,
    height: 100,
    alignSelf: "center",
    resizeMode: "stretch",
  },
  emailIcon: {
    width: 18,
    height: 18,
    position:"absolute",
    marginTop:20,
marginLeft:10    //bottom: 47,
   // justifyContent:'flex-start',
    //alignItems:"flex-start",
    //left: 30,
  },
  lockIcon: {
    width: 18,
    height: 18,
    // position:'absolute'
  },
  lockIconContainer: {
    bottom:45,
    marginLeft:10,
   // position:'absolute'
  },
  welcomel: {
    marginTop: verticalScale(40),
    fontSize: 40,

    fontFamily: Bold,
    //alignSelf: "center",
    // justifyContent: 'center',
    // alignItems: 'flex-start',
    fontWeight: "600",
   // marginBottom: 20,
    marginLeft: 25,
    height:responsiveHeight(20),
   // backgroundColor:'red'
  },
  cardContainerl: {
    width: responsiveWidth(100),
    height: responsiveHeight(5),
  //backgroundColor: "green",
    // flexDirection: 'row',
    // marginTop: 10,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iContainerl: {
    width: responsiveWidth(100),
    height: responsiveHeight(10),
  //backgroundColor: "blue",
    flexDirection: "row",
    // marginTop: 10,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer3: {
    width: responsiveWidth(100),
    height: responsiveHeight(10),
   //  backgroundColor: "red",
    flexDirection: "row",
    // marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
