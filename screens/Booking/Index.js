import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import appStyle from "../../style/login_start";
import profile from "../../style/profile";
import wallet from "../../style/wallet";
import ApiCall from "../../Services/ApiCall";
import { SvgUri, SvgXml } from "react-native-svg";
import Progress from "../Booking/Progress";
import Complete from "../Booking/Complete";
import Pending from "../Booking/Pending";
import Footer from "../Footer/Index";
import { NavigationContainer } from "@react-navigation/native";
import SelectDropdown from "react-native-select-dropdown";
import Toast from "react-native-toast-message";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
const image_upload = require("../../assets/image_upload.png");
const arrow_back = require("../../assets/arrow_back.png");
const rightarrow = require("../../assets/rightarrow.png");
const Loading = require("../../assets/Loading_icon.gif");

const Index = ({ navigation }) => {
  const [state, setState] = useState({
    flag: false,
    image: null,
    index: 1,
    routes: [
      { key: "first", title: "Pending" },
      { key: "second", title: "In-progress" },
      { key: "third", title: "Complete" },
    ],
  });

  useEffect(() => {
    console.log(navigation);
  }, []);

  const openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
    if (pickerResult.cancelled === true) return;
    setState({ ...state, image: pickerResult.assets[0].uri });
    console.log(pickerResult.cancelled);
  };

  const handleEmail = (e) => {
    setState({ ...state, email: e.nativeEvent.text });
  };

  const handlePassword = (e) => {
    setState({ ...state, password: e.nativeEvent.text });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ ...state, flag: true });

    const data = {
      email: state.email,
      password: state.password,
      deviceID: "abcffdfddf",
    };

    let login_response = await ApiCall.postAPICall(
      2,
      "Account/Authenticate",
      data
    );
    if (typeof login_response.token === "undefined") {
      var message = "Something Went Wrong..!";
      if (typeof login_response.message !== "undefined") {
        message = login_response.message;
      }
      Toast.show({
        type: "error",
        position: "top",
        text2: message,
        topOffset: 80,
      });
      setState({ ...state, flag: false });
    } else {
      var Bearertoken = "Bearer " + login_response.token;
      AsyncStorage.setItem("Bearertoken", JSON.stringify(Bearertoken));
      var response = await ApiCall.postAPICall(1, "login", data);
      if (response.status) {
        AsyncStorage.setItem("user", JSON.stringify(response.data));
        var token = response.custom;
        AsyncStorage.setItem("token", JSON.stringify(token));
        AsyncStorage.setItem("permisions", JSON.stringify(response.permisions));
        AsyncStorage.setItem("isLogin", true);
        navigation.navigate("Home");
      } else {
        const errors = response.error;
        setState({ ...state, error_email: errors });
        Toast.show({
          type: "error",
          position: "top",
          text2: errors,
          topOffset: 80,
        });
      }
      setState({ ...state, flag: false });
    }
  };

  const setIndex = (e) => {
    console.log(e);
    setState({ ...state, index: e });
  };

  const FirstRoute = () => {
    return (
      <View style={{ flex: 1 }}>
        <Pending navigation={navigation} />
      </View>
    );
  };

  const SecondRoute = () => {
    return (
      <View style={{ flex: 1 }}>
        <Progress navigation={navigation} />
      </View>
    );
  };

  const ThirdRoute = () => {
    return (
      <View style={{ flex: 1 }}>
        <Complete navigation={navigation} />
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Toast />
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <View style={profile.welcome}>
          <Image style={profile.arrow_back} source={arrow_back} />
          <Text style={profile.welcomeText}>My Jobs</Text>
        </View>
      </TouchableOpacity>
      <TabView
        navigationState={{ index: state.index, routes: state.routes }}
        onIndexChange={setIndex}
      //  renderTabBar={renderTabBar}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
          third: ThirdRoute,
        })}
      />
      <Footer flag={"Booking"} navigation={navigation} />
    </View>
  );
};

export default Index;
