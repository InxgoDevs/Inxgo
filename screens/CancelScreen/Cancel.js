import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image,KeyboardAvoidingView,TextInput } from "react-native";
import appStyle from "../../style/login_start";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import signUpStyle from "../../style/SignUp";
import CustomButton from "../../components/CustomButton";
import Canceltext from "../../components/CancelText";

import { Platform } from 'react-native';

import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";

const arrow_back = require("../../assets/arrow_back.png");

const CancelScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioSelect = (option) => {
    setSelectedOption(option);
  };

  return (
  
    <View style={styles.container}>
      <View
        style={{
          height: responsiveHeight(7),
          width: responsiveWidth(100),
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("TrackerMain")}>
          <Image style={appStyle.arrow_backF} source={arrow_back} />
        </TouchableOpacity>
        <Text style={signUpStyle.welcomeF}>Cancel Task</Text>
      </View>
      <View style={{ height: responsiveHeight(10), justifyContent: "center" }}>
        <Text style={{ fontSize: 13, fontWeight: "300", marginLeft: 20 }}>
          Please select the reason for cancellation.
        </Text>
      </View>
      <View style={{ height: responsiveHeight(45) }}>
        <Canceltext
          Cancel="Waiting for long time"
          selected={selectedOption === "Waiting for long time"}
          onSelect={() => handleRadioSelect("Waiting for long time")}
        />
        <Canceltext
          Cancel="Unable to contact supplier"
          selected={selectedOption === "Unable to contact supplier"}
          onSelect={() => handleRadioSelect("Unable to contact supplier")}
        />
        <Canceltext
          Cancel="Wrong information shown"
          selected={selectedOption === "Wrong information shown"}
          onSelect={() => handleRadioSelect("Wrong information shown")}
        />
        <Canceltext
          Cancel="The price is not reasonable"
          selected={selectedOption === "The price is not reasonable"}
          onSelect={() => handleRadioSelect("The price is not reasonable")}
        />
      </View>
      <View style={{ height: responsiveHeight(5), justifyContent: "center" }}>
        <Text style={{ fontSize: 16, fontWeight: "500", marginLeft: 20 }}>
          Others
        </Text>
      </View>
      <View style={{ height: responsiveHeight(7) }}>
        <TextInput
          style={styles.input}
          placeholder="Other Reasons"
      
          textAlignVertical="top"
        />
      </View>
      <View style={{ height: responsiveHeight(14) }} />
      <View style={{ height: responsiveHeight(9.5) }}>
        <CustomButton
          title={"Submit"}
          color="#FFC44D"
          onPress={() => navigation.navigate("CancelScreen")}
          width={responsiveWidth(85)}
        />
      </View>
      
    </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    
  },
  inputSearchs: {
    width: responsiveWidth(85),
    paddingHorizontal: 5,
    fontSize: 13,
    zIndex: 0,
    left: 20,
  },
  input: {
    borderWidth:0.5,
    borderColor: "#E6E6E6",
    height: responsiveHeight(7),
    backgroundColor:'#fafafa',
   // borderRadius: moderateScale(10),
    paddingLeft: responsiveWidth(1.5),
    width: responsiveWidth(85),
    marginLeft:20,
    fontSize:13,
    justifyContent:"center"
    
  },
});

export default CancelScreen;
