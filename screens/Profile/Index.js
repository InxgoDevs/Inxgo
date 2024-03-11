import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import Flag from "react-native-flags";
import SvgUri from "react-native-svg-uri";
import { StatusBar } from "expo-status-bar";
import * as ImagePicker from "expo-image-picker";
import MyGlobleSetting from "../../Services/MyGlobleSetting";
import ApiCall from "../../Services/ApiCall";
import appStyle from "../../style/login_start";
import profile from "../../style/profile";
import arrow_back from "../../assets/arrow_back.png";
import image_upload from "../../assets/image_upload.png";
import Loading from "../../assets/Loading_icon.gif";
import arrowdown from "../../assets/svg/arrowdown.svg";

const gender = ["Male", "Female"];

const Index = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.nativeEvent.text);
  };

  const handlePassword = (e) => {
    setPassword(e.nativeEvent.text);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFlag(true);
    const data = {
      email,
      password,
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
      setFlag(false);
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
        Toast.show({
          type: "error",
          position: "top",
          text2: errors,
          topOffset: 80,
        });
        setFlag(false);
      }
    }
  };

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
    if (!pickerResult.cancelled) {
      setImage(pickerResult.assets[0].uri);
    }
  };

  return (
    <ScrollView keyboardDismissMode={"on-drag"} style={appStyle.body}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
          <View style={profile.welcome}>
            <Image style={profile.arrow_back} source={arrow_back} />
            <Text style={profile.welcomeText}>Fill Your Profile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={openImagePickerAsync} activeOpacity={0.5}>
          <Image
            style={profile.image}
            source={image ? { uri: image } : image_upload}
          />
        </TouchableOpacity>
        <View style={appStyle.cardContainer}>
          <TextInput
            theme={{
              colors: {
                placeholder: "white",
                text: "white",
                primary: "white",
                underlineColor: "transparent",
                background: "#003489",
              },
            }}
            style={profile.inputSearch}
            underlineColor="transparent"
            onChange={handleEmail}
            placeholder="Full Name"
          />
        </View>
        <View style={appStyle.cardContainer}>
          <TextInput
            secureTextEntry={true}
            underlineColor="transparent"
            theme={{
              colors: {
                placeholder: "white",
                text: "white",
                primary: "white",
                underlineColor: "transparent",
                background: "#003489",
              },
            }}
            style={profile.inputSearch}
            onChange={handlePassword}
            placeholder="Nickname"
          />
        </View>
        {/* Add other input fields similarly */}
        {!flag ? (
          <TouchableOpacity style={profile.appButtonContainer}>
            <Text style={appStyle.appButtonText}>Continue</Text>
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
      </View>
    </ScrollView>
  );
};

export default Index;
