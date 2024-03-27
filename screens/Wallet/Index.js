import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import appStyle from "../../style/login_start";
import wallet from "../../style/wallet";
import Footer from "../Footer/Index";
import profile from "../../style/profile";
import Payment from "./Payment";
const image_upload = require("../../assets/image_upload.png");
const arrow_back = require("../../assets/arrow_back.png");
const Loading = require("../../assets/Loading_icon.gif");
const money = require("../../assets/icons/money.png");
const creditcard = require("../../assets/icons/creditcard.png");

const Index = ({ navigation }) => {
  const [image, setImage] = useState(null);

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
    setImage(pickerResult.assets[0].uri);
  };

  return (
    <View style={{ flex: 1 
   }}>
      <ScrollView keyboardDismissMode="on-drag" style={appStyle.body}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <View style={profile.welcome}>
            <Image style={profile.arrow_back} source={arrow_back} />
            <Text style={profile.welcomeText}>My Wallet</Text>
          </View>
        </TouchableOpacity>
        <View style={{justifyContent:'center',alignItems:"center"}}>
      <TouchableOpacity onPress={()=>navigation.navigate("Payment")}>
        <Text>Payment</Text>
      </TouchableOpacity>    
      
        </View>
      </ScrollView>
      <Footer flag={"Wallet"} navigation={navigation} />
    </View>
  );
};

export default Index;
