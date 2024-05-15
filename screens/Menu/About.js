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
import { Bold, Regular } from "../../constants/fonts";
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
    <View style={{ height: "100%", backgroundColor: "#fafafa", flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View>
          <View style={profile.welcome}>
            <TouchableOpacity
              onPress={() => navigation.navigate("EditProfile")}
            >
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
              Welcome to INXGO! We're here to revolutionize the way you access
              services. Join us as your trusted destination that seamlessly
              bridges the gap between service providers and clients. With our
              user-friendly app, accessing services in over 50 different areas
              is simple and convenient. It is an ultimate platform, where you
              can find everything you need. Our mission is: to simplify the
              process of finding and delivering services, ensuring convenience
              for everyone involved.
              {"\n"}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontFamily: Bold,
                width: responsiveWidth(90),
                marginLeft: 20,
                paddingHorizontal: 5,
              }}
            >
              What We Offer? .{"\n"}
            </Text>
          </View>
          <View>
            <Text style={styles.bulletPoint}>
              {"\u2022"} Explore over 50 different skills on our platform,
              ensuring you find the perfect provider for your needs.
            </Text>
            <Text style={styles.bulletPoint}>
              {"\u2022"} Our app is designed for both service providers and
              clients. It's simple to use, so you can quickly find what you
              need.
            </Text>
            <Text style={styles.bulletPoint}>
              {"\u2022"} We're committed to upholding the highest integrity,
              transparency, and customer satisfaction standards in everything we
              do.
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontFamily: Bold,
                width: responsiveWidth(90),
                marginLeft: 20,
                paddingHorizontal: 5,
              }}
            >
              Why Choose Us?
              {"\n"}
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
              At INXGO, we're more than just a service platform—a community
              dedicated to excellence and innovation. We prioritize your needs
              above all else, ensuring that every interaction with our platform
              is personalized to meet your requirements. We aim to make your
              experience with us as easy as possible, from finding the right
              service provider to completing your transaction. With INXGO, you
              can expect nothing but the best. We're committed to delivering
              quality service that exceeds your expectations every time.
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontFamily: Bold,
                width: responsiveWidth(90),
                marginLeft: 20,
                paddingHorizontal: 5,
              }}
            >
              Join Us Today!
              {"\n"}
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
              Ready to experience a new way of accessing and delivering
              services? Join us on our journey to redefine service provision:
            </Text>
          </View>
          <View>
  <Text style={styles.title}>For Service Providers:</Text>
  <Text style={styles.description}>
    <Text style={styles.bold}>For Service Providers:</Text> Showcase your skills and connect with clients needing your expertise. With over 50 different areas to explore, there are plenty of opportunities to thrive on our platform.
  </Text>
</View>

        </View>
      </ScrollView>

      <Footer flag={"Profile"} navigation={navigation} />
    </View>
  );
};

export default Index;
const styles = StyleSheet.create({
  bulletPoint: {
    fontSize: 16,
    marginBottom: 5,
    fontSize: 13,
    fontFamily: Regular,
    width: responsiveWidth(90),
    marginLeft: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Bold', // Assuming 'Bold' is the name of your bold font
    marginBottom: 5,
  },
  description: {
    fontSize: 13,
    fontFamily: 'Regular', // Assuming 'Regular' is the name of your regular font
    width: responsiveWidth(90),
    marginLeft: 20,
    paddingHorizontal: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
});
