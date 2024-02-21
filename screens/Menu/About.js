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
import ApiCall from "../../Services/ApiCall";
import SvgUri from "react-native-svg-uri";
import { NavigationContainer } from "@react-navigation/native";
import SelectDropdown from "react-native-select-dropdown";
import Toast from "react-native-toast-message";
import MyGlobleSetting from "../../Services/MyGlobleSetting";
const image_upload = require("../../assets/image_upload.png");
const arrow_back = require("../../assets/arrow_back.png");
const Loading = require("../../assets/Loading_icon.gif");
const rightarrow = require("../../assets/rightarrow.png");
import ProfileSvg from "../../assets/svg/profile.svg";
import dangercircle from "../../assets/svg/dangercircle.svg";
import languageSvg from "../../assets/svg/languageSvg.svg";
import location from "../../assets/svg/location.svg";
import lock from "../../assets/svg/lock.svg";
import logout from "../../assets/svg/logout.svg";
import notification from "../../assets/svg/notification.svg";
import shielddone from "../../assets/svg/shielddone.svg";
import walletSvg from "../../assets/svg/wallet.svg";

const Index = ({ navigation }) => {
  const [state, setState] = useState({
    flag: false,
    image: null,
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
    setState({
      ...state,
      image: pickerResult.assets[0].uri,
    });
    console.log(pickerResult.cancelled);
  };

  const Logout = () => {
    // Your logout logic here
  };

  return (
    <View
      keyboardDismissMode={"on-drag"}
      style={{ height: "100%", backgroundColor: "white" }}
    >
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <View style={profile.welcome}>
            <Image style={profile.arrow_back} source={arrow_back} />
            <Text style={profile.welcomeText}>Profile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <Image
            style={profile.image}
            source={state.image ? { uri: state.image } : image_upload}
          />
        </TouchableOpacity>
        <Text style={[menu.profile, menu.profileFont1]}>Jane Doe</Text>
        <Text style={[menu.profile, menu.profileFont2]}>+92 334 1234567</Text>
        <View style={menu.line} />

        {/* Remaining JSX code */}

        <TouchableOpacity onPress={Logout}>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              marginTop: 20,
              zIndex: 1111111111111,
              marginBottom: 50,
            }}
          >
            <SvgUri
              style={{ marginLeft: "5%" }}
              source={{ uri: MyGlobleSetting.state.svgUrl + "logout.svg" }}
            />
            <View style={wallet.LeftContainer}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 16, color: "#EB001B" }}>Logout</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <Footer flag={"Profile"} navigation={navigation} />
    </View>
  );
};

export default Index;
