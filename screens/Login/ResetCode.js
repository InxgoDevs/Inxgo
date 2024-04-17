//import liraries
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import appStyle from "../../style/login_start";
import signUpStyle from "../../style/SignUp";

import Toast from 'react-native-toast-message';


const google = require("../../assets/google.png");
const arrow_back = require('../../assets/arrow_back.png');

// create a component
const ResetCode = ({ navigation }) => {
  const [timer, setTimer] = useState(30); // Initial timer value
  const [otpExpired, setOtpExpired] = useState(false);
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'OTP Sent Successfully',
     // text2: 'This is some something 👋'
    });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      // Decrease timer by 1 every second
      setTimer(prevTimer => {
        if (prevTimer === 1) {
          // If timer reaches 0, set OTP expired and clear interval
          setOtpExpired(true);
          clearInterval(interval);
        }
        return prevTimer - 1;
      });
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);
  const handleResend = () => {
    showToast();
    startTimer(); // Restart the timer when the "Resend" button is clicked
 };
 const startTimer = () => {
  setOtpExpired(false);
  setTimer(30);
  const interval = setInterval(() => {
    setTimer(prevTimer => {
      if (prevTimer === 1) {
        setOtpExpired(true);
        clearInterval(interval);
      }
      return prevTimer - 1;
    });
  }, 1000);

  return () => clearInterval(interval);
};

  return (
    <View style={styles.body} >
      <View style={{ height: responsiveHeight(20), flexDirection: 'row', backgroundColor: '#FAFAFA',top:20 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Image style={styles.arrow_backForget} source={arrow_back} />
        </TouchableOpacity>
        <Text style={signUpStyle.welcomeF}>Forgot Password</Text>
      </View>
      <View style={{ backgroundColor: '#FAFAFA', height: responsiveHeight(30), justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 16, alignSelf: 'center', paddingHorizontal: 50 }}>Code has been sent to ja****oe@yourdomain.com</Text>
      </View>
      <View style={{ flexDirection: "row", backgroundColor: "#FAFAFA", height: responsiveHeight(10), justifyContent: 'space-between' }}>
        <TextInput style={styles.TextPin} keyboardType="numeric" maxLength={1} />
        <TextInput style={styles.TextPin} keyboardType="numeric" maxLength={1} />
        <TextInput style={styles.TextPin} keyboardType="numeric" maxLength={1} />
        <TextInput style={styles.TextPin} keyboardType="numeric" maxLength={1} />
      </View>
      <View style={{ backgroundColor: "#FAFAFA", alignItems: 'center', height: responsiveHeight(10) }}>
  {otpExpired ? (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={{ fontSize: 16 }}>OTP Expired</Text>
      <TouchableOpacity style={{  marginLeft: 10 }}  onPress={handleResend}>
        <Text style={{fontSize:16,fontWeight:'bold',color:'#FFC44D',borderBottomWidth:1.5,borderBottomColor:'#FFC44D'}}>Resend</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <Text style={{ fontSize: 16 }}>Resend code in <Text style={{ color: '#FFC44D' }}>{timer} s</Text></Text>
  )}
</View>

      <View style={{ backgroundColor: "#FAFAFA", height: responsiveHeight(20), justifyContent: 'flex-end' }}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.Btncontainer}>
          <Text style={styles.btntxt}>Verify</Text>
        </TouchableOpacity>
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 30,
    width: responsiveWidth(100),
    flex: 1,
  },
  TextPin: {
    borderWidth: 1,
    width: 80,
    height: 60,
    borderRadius: 8,
    fontSize: 24,
    textAlign: 'center',
    borderColor: "#D9D9D9",
  },
  btntxt: {
    fontSize: 16,
    color: "black",
    alignSelf: "center",
    fontFamily: 'Inter',
    fontWeight: '600',
  },
  Btncontainer: {
    width: responsiveWidth(80),
    alignSelf: 'center',
    backgroundColor: "#FFC44D",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    justifyContent: 'flex-end'
  },
  arrow_backForget: {
    top: 6,
    marginRight: 20,
  },
});

//make this component available to the app
export default ResetCode;
