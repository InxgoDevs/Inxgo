import React, { useState, useEffect } from "react";
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
import signUpStyle from "../../style/SignUp";
import apple from "../../assets/apple.png";
import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import Loading from "../../assets/Loading_icon.gif";
import Toast from "react-native-toast-message";
import ApiCall from "../../Services/ApiCall";
const arrow_back=require('../../assets/arrow_back.png')


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
    <View style={appStyle.body}>
      <View>
      <TouchableOpacity onPress={() =>navigation.navigate('StartLogin')}>
        <Image style={appStyle.arrowbacklogin}  source={arrow_back}   />
        </TouchableOpacity>
        <Toast />
        <Text style={signUpStyle.welcome}>Create your{"\n"}Account</Text>
    
        <View style={appStyle.cardContainer}>
           <TextInput
             mode="outlined"
             theme={{
             colors: { primary: "#FFC44D", underlineColor: "transparent" },
             }}
            style={[appStyle.inputSearch]}
            onChange={(e) => handleState(e, "email")}
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
            secureTextEntry={true}
            onChange={(e) => handleState(e, "password")}
            placeholder="Password"
          />
        </View>
        <View style={appStyle.leftContainer}>
            <CheckBox  />
            <Text style={appStyle.rowLabelText}>Remember Me</Text>
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
       
          <View>
            <Text style={signUpStyle.lineText}>or continue with</Text>
          </View>
        
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
            onPress={() => navigation.navigate("Login")}
            style={Style.TextContainer}
          >
            Login
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
const Style=StyleSheet.create({
TextContainer:{
  color:'#FFC44D',
      fontWeight:'bold',
      fontSize:15,
       fontFamily: 'Inter',
      left:70,
      
}


 })