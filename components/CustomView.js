import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Regular } from "../constants/fonts";
import { moderateScale } from "react-native-size-matters";

// create a component
const CustomView = ({
  imageSource,
  text,
  cashText,
  moneyIconSource,
  amountText,
}) => {
  return (
    <View
      style={{ paddingHorizontal: 20, marginTop: 30, flexDirection: "row" }}
    >
      <View>
        <Image source={imageSource} />
      </View>
      <View
        style={{
         // backgroundColor: "blue",
          height: responsiveHeight(8),
          width: responsiveWidth(75),
          alignItems:'center'
        }}
      >
        <View
          style={{
            flexDirection: "row",
           // flexGrow: 1,
            justifyContent: "space-between",
            width:responsiveWidth(70),
            paddingHorizontal: 2,
            marginTop: 5,
            height: responsiveHeight(3),
            overflow: "hidden",
          //  marginRight:moderateScale(0),
        //backgroundColor:'red'
          }}
        >
          <Text
            style={{ fontSize: 18, fontWeight: "500", fontFamily: Regular }}
          >
            {text}
          </Text>
          <Text
            style={{ fontSize: 18, fontWeight: "500", fontFamily: Regular }}
          >
            {amountText}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            //alignItems: "center",
            //top: 40,
            // right: 145,
            position: "absolute",
           // backgroundColor: "purple",
            width: responsiveWidth(70),
            marginTop: 30,
            // marginLeft:10,
            justifyContent:"space-between",
          //  paddingHorizontal:5
          }}
        >
          {/* Profession */}
          <View style={{flexDirection:'row',width:responsiveWidth(30)}}>
            <Text style={{ fontSize: 12, fontFamily: Regular }}>Plumber</Text>

            <Text
              style={{
                fontSize: 12,
                fontFamily: Regular,
                marginHorizontal: 10,
              }}
            >
              |
            </Text>
            <Text style={{ fontSize: 12, fontFamily: Regular }}>
              26 May, 2023
            </Text>
          </View>

          <View style={{ flexDirection:'row',width:responsiveWidth(40),justifyContent:'flex-end',alignItems:'center' }}>
            <Image
              source={moneyIconSource}
              style={{ marginLeft: 0, }}
            />
            <Text style={{ fontSize:responsiveFontSize(1.5), fontFamily: Regular }}>
              {cashText}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

// make this component available to the app
export default CustomView;
