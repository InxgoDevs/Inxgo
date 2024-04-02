//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { CommonImages } from "../../constants/Images";
import profile from "../../style/profile";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import CustomButton from "../../components/CustomButton";
import { Regular } from "../../constants/fonts";
import CustomView from "../../components/CustomView";
import customImage from '../../assets/Frame.png';
import customMoneyIcon from '../../assets/Money.png';



// create a component
const Credit = () => {
  return (
    <View style={styles.container}>
      <View style={profile.welcome}>
        <TouchableOpacity>
          <Image style={profile.arrow_back} source={CommonImages.arrow} />
        </TouchableOpacity>
        <Text style={profile.welcomeText}>My Wallet</Text>
      </View>
      <View
        style={{
          backgroundColor: "#FFC44D",
          height: responsiveHeight(20),
          width: responsiveWidth(90),
          marginLeft: 20,
          borderRadius: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            top: 10,
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ marginTop: 10, fontSize: 18, fontFamily: Regular }}>
            Jane Doe
          </Text>
          <Image
            source={require("../../assets/Symbols.png")}
            style={{ right: 10 }}
          />
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <Text>****_****_****_**23</Text>
        </View>
        <View style={{ marginTop: 20, paddingHorizontal: 18}}>
          <Text style={{ fontSize: 16 }}> Balance:</Text>
        </View>
        <View style={{ paddingHorizontal: 20, flexDirection: "row" }}>
          <Text style={{ fontSize: 32, fontWeight: "600",fontFamily: Regular,}}>$ 243.45</Text>
          {/* <TouchableOpacity style={styles.btn}>
            <Text>Withdraw</Text>
          </TouchableOpacity> */}
          <TouchableOpacity style={styles.btn}>
            <Text>Add Credit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "600", fontFamily: Regular }}>
          Transaction History
        </Text>
        <TouchableOpacity>
        <Text style={{ fontSize: 15, color: "#FFC44D", fontFamily: Regular }}>
          See All
        </Text>
        </TouchableOpacity>
        
      </View>
      <CustomView imageSource={customImage} text="Mark Tuan" cashText="Cash" moneyIconSource={customMoneyIcon} amountText="$ 40" />
      <CustomView imageSource={customImage} text="Mark Tuan" cashText="Mastercard" moneyIconSource={require('../../assets/Credit card.png')} amountText="$ 20"/>
      <CustomView imageSource={customImage} text="Mark Tuan" cashText="Mastercard" moneyIconSource={require('../../assets/Credit.png')} amountText="$ 120" />
      <CustomView imageSource={customImage} text="Mark Tuan" cashText="Cash" moneyIconSource={customMoneyIcon}amountText="$ 40"/>
      <CustomView imageSource={customImage} text="Mark Tuan" cashText="Mastercard" moneyIconSource={require('../../assets/Credit card.png')} amountText="$ 20"/>

    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: "#fafafa",
  },
  btn: {
    paddingHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 15,
    marginLeft: 80,
    paddingVertical: 5,
    height: 30,
    marginTop: 8,
  },
});

//make this component available to the app
export default Credit;
