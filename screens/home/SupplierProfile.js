//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Regular } from "../../constants/fonts";
import appStyle from "../../style/login_start";
import Toast from "react-native-toast-message";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { Bold } from "../../constants/fonts";
import profile from "../../style/profile";
import CustomButton from "../../components/CustomButton";

const arrow_back = require("../../assets/arrow_back.png");
// create a component
const SupplierProfile = () => {
  return (
    <View style={styles.container}>
      <View style={profile.welcome}>
        <Image style={profile.arrow_back} source={arrow_back} />
        <Text style={profile.welcomeText}>Provider Profile</Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image source={require("../../assets/Frame.png")} />
        <Text style={{ fontSize: 24, fontFamily: Regular, fontWeight: "600" }}>
          Mark Tuan
        </Text>
        <Text style={{ fontSize: 16, fontFamily: Regular }}>Plumber</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Image source={require("../../assets/Round.png")} />
        <Image source={require("../../assets/Round.png")} />
        <Image source={require("../../assets/Round.png")} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Text>4.7</Text>
        <Text>104</Text>
        <Text>$40</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Text>Ratings</Text>
        <Text>Tasks</Text>
        <Text>Hourly</Text>
      </View>
      <Text>About Me:</Text>
      <Text>
        Dedicated and highly skilled plumber with 5+ years of experience
        providing exceptional plumbing services. Proficient in diagnosing,
        repairing, and installing various plumbing systems. Committed to
        delivering high-quality workmanship and outstanding customer service.
      </Text>
      <Text>Key Skills:</Text>
      <Text>Plumbing Systems Installation and Repair
Pipefitting and Welding
Drainage Systems Maintenance
Water Heater Installation and Maintenance
Fixture Replacement and Repair</Text>
<View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Image source={require("../../assets/Round.png")} />
        <Image source={require("../../assets/Round.png")} />
        <Image source={require("../../assets/Round.png")} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Text>4.7</Text>
        <Text>104</Text>
        <Text>$40</Text>
      </View>
      <View style={{height:responsiveHeight(13)} }>
        <CustomButton
          title={"Hire Me"}
          color="#FFC44D"
          width={responsiveWidth(40)}
          onPress={()=>navigation.navigate("SignUp")}
        />
     </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: "#FAFAFA",
  },
 
});

//make this component available to the app
export default SupplierProfile;
