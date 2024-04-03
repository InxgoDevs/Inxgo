import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import appStyle from "../../style/footer";
import MyGlobleSetting from "../../Services/MyGlobleSetting";
import SvgUri from "react-native-svg-uri";
const home=require('../../assets/home.png');
const work=require('../../assets/work.png');
const wallets=require('../../assets/wallet.png');
const profile=require('../../assets/account_circle.png');

const Index = ({ navigation, flag }) => {
  const footerMenu = (path) => {
    navigation.navigate(path);
    

  };

  return (
    <View style={appStyle.footer}>
      <TouchableOpacity
        style={appStyle.footerDiv}
        onPress={() => footerMenu("Home")}
      >
        <View style={appStyle.iconTextContainer}>
  <Image
    source={home}
    style={[appStyle.image, { tintColor: flag === "Home" ? "#FFC44D" : "black" }]}
  />
  <Text style={[appStyle.text, { color: flag === "Home" ? "#FFC44D" : "black" }]}>Home</Text>
</View>

      </TouchableOpacity>
      <TouchableOpacity
        style={appStyle.footerDiv}
        onPress={() => footerMenu("Booking")}
      >
        <View style={appStyle.iconTextContainer}>
          <Image source={work} style={[appStyle.image, { tintColor: flag === "Booking" ? "#FFC44D" : "black" }]} />
          <Text style={[appStyle.text, { color: flag === "Booking" ? "#FFC44D" : "black" }]}>My Jobs</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={appStyle.footerDiv}
        onPress={() => footerMenu("Credit")}
      >
        <View style={appStyle.iconTextContainer}>
          <Image source={wallets} style={[appStyle.image, { tintColor: flag === "Wallet" ? "#FFC44D" : "black" }]} />
          <Text style={[appStyle.text, { color: flag === "Wallet" ? "#FFC44D" : "black" }]}>Wallet</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={appStyle.footerDiv}
        onPress={() => footerMenu("EditProfile")}
      >
        <View style={appStyle.iconTextContainer}>
          <Image source={profile} style={[appStyle.image, { tintColor: flag === "Profile" ? "#FFC44D" : "black" }]} />
          <Text style={[appStyle.text, { color: flag === "Profile" ? "#FFC44D" : "black" }]}>Profile</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Index;
