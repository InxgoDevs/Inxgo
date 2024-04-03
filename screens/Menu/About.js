import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
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
import profile from "../../style/profile";
import menu from "../../style/menu";
import Footer from "../Footer/Index";
import wallet from "../../style/wallet";

import { NavigationContainer } from "@react-navigation/native";
import { Regular } from "../../constants/fonts";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const image_upload = require("../../assets/image_upload.png");
const arrow_back = require("../../assets/arrow_back.png");

const Index = ({ navigation }) => {
  useEffect(() => {
    console.log(navigation);
  }, []);

  return (
    <View
     
      style={{ height: "100%", backgroundColor: "#fafafa",flex:1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View>
          <View style={profile.welcome}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Image style={profile.arrow_back} source={arrow_back} />
            </TouchableOpacity>

            <Text style={profile.welcomeText}>About Us</Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: responsiveHeight(20),
            }}
          >
            <Image source={require("../../assets/logo.png")} />
          </View>
          <View>
            <Text
              style={{
                fontSize: 13,
                fontFamily: Regular,
                width: responsiveWidth(90),
                marginLeft: 20,
                paddingHorizontal: 5,
              }}
            >
              Welcome to INXGO, your ultimate job portal app designed to
              revolutionize the way you search, apply, and connect with career
              opportunities. At INXGO, we believe that finding the right job
              should be seamless, efficient, and tailored to your unique skills
              and aspirations.{"\n"}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 13,
                fontFamily: Regular,
                width: responsiveWidth(90),
                marginLeft: 20,
                paddingHorizontal: 5,
              }}
            >
              Our mission is to empower job seekers like you by providing a
              comprehensive platform that brings together top employers and
              talented professionals from various industries. Whether you're a
              fresh graduate stepping into the professional world or an
              experienced individual seeking new challenges, INXGO is here to
              support you on your career journey.{"\n"}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 13,
                fontFamily: Regular,
                width: responsiveWidth(90),
                marginLeft: 20,
                paddingHorizontal: 5,
              }}
            >
              With INXGO, you can create a powerful profile that showcases your
              expertise, education, and experience. Stand out from the crowd by
              uploading a professional photo and highlighting your key skills.
              Our advanced algorithm matches your profile with relevant job
              opportunities, ensuring you discover the best-suited positions for
              your career advancement.{"\n"}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 13,
                fontFamily: Regular,
                width: responsiveWidth(90),
                marginLeft: 20,
                paddingHorizontal: 5,
              }}
            >
              But INXGO is more than just a job search platform. It's a
              community where you can build valuable connections, network with
              industry experts, and stay updated on the latest trends and
              insights. Join industry-specific groups, share your knowledge, and
              learn from others to enhance your professional growth{"\n"}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 13,
                fontFamily: Regular,
                width: responsiveWidth(90),
                marginLeft: 20,
                paddingHorizontal: 5,
              }}
            >
              Join the INXGO community today and embark on a transformative
              journey towards a rewarding career. Let us help you unlock your
              full potential and connect you with opportunities that align with
              your ambitions. Together, we can redefine the future of job search
              and create a world where talent and opportunity converge
              seamlessly. Welcome to INXGO!
            </Text>
          </View>
        </View>
      </ScrollView>

      <Footer flag={"Profile"} navigation={navigation} />
    </View>
  );
};

export default Index;
