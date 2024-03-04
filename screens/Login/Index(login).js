import React, { useEffect } from 'react';
import { StatusBar } from "expo-status-bar";
import { TextInput } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ScrollView } from "react-native";
import appStyle from "../../style/login";
import { SvgUri, SvgXml } from 'react-native-svg';
import { NavigationContainer } from '@react-navigation/native';

const logo = require('../../assets/logo.png');
const google = require('../../assets/google.png');
const image = require('../../assets/image.png');

const Index = ({ navigation }) => {
  useEffect(() => {
    console.log(this.props);
  }, []);

  return (
    <ScrollView keyboardDismissMode={'on-drag'}>
      <View>
        <Image style={appStyle.logo} source={logo} />
        <Text style={appStyle.welcome}>Welcome Back!</Text>
        <View style={appStyle.cardContainer}>
          <TextInput mode='outlined' theme={{ roundness: 20, colors: { primary: 'red', underlineColor: 'transparent' } }} underlineColor="outlined" style={appStyle.inputSearch} label="Email" placeholder="Email" />
        </View>
        <View style={appStyle.cardContainer}>
          <TextInput mode='outlined' underlineColor="outlined" theme={{ roundness: 20 }} style={appStyle.inputSearch} label="Password" />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={appStyle.appButtonContainer}>
          <Text style={appStyle.appButtonText}>Sign In</Text>
        </TouchableOpacity>
        <View style={appStyle.cardContainer}>
          <View style={appStyle.leftContainer}>
            <CheckBox style={appStyle.remember} />
            <Text style={appStyle.rowLabelText}>Remember Me</Text>
          </View>
          <View style={appStyle.rightContainer}>
            <Text style={appStyle.rowLabelText}>Forget Password</Text>
          </View>
        </View>
        <View style={appStyle.cardContainer}>
          <View style={appStyle.line} />
          <View>
            <Text style={appStyle.lineText}>Or</Text>
          </View>
          <View style={appStyle.line} />
        </View>
        <TouchableOpacity style={appStyle.appButtonSoical}>
          <Text style={appStyle.appButtonTextSoical}>
            <Image style={appStyle.google} source={google} />
            Continue With Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={appStyle.appButtonSoical}>
          <Text style={appStyle.appButtonTextSoical}>
            <Image style={appStyle.google} source={image} />
            Continue With Apple
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={appStyle.appButtonSoical}>
          <Text style={appStyle.appButtonTextSoical}>
            <Image style={appStyle.google} source={image} />
            Continue With Facebook
          </Text>
        </TouchableOpacity>
        <View style={appStyle.cardContainer}>
          <Text style={appStyle.signUp}>Don’t have account?Sign Up</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Index;
