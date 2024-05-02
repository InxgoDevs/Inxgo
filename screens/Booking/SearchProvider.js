//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Image } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
  } from "react-native-responsive-dimensions";
  const arrow_back = require("../../assets/arrow_back.png");
  import signUpStyle from "../../style/SignUp";

// create a component
const SearchProvider = () => {
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
          <Image style={styles.arrow_backF} source={arrow_back} />
        </TouchableOpacity>
        <Text style={signUpStyle.welcomeF}>Searching for Provider</Text>
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
        backgroundColor: '#fafafa',
    },
    arrow_backF: {
        //top: 6,
        marginHorizontal:20,
        // marginLeft:10 
     },
});

//make this component available to the app
export default SearchProvider;
